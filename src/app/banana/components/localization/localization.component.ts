import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { tokenUtil } from '../../utils/tokenUtil';
import { notifyManage, showNotification } from '../../utils/notifyUtil';
import { Localization } from '../../models/localization';
import { BananaConstants } from '../../utils/constants';


declare var $: any;

@Component({
	selector: 'app-localization',
	templateUrl: './localization.component.html',
	styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent implements OnInit {
	loading = false;
	localizationTitle : string ='Crear Localizacion';
	@Input() localization : Localization = new Localization();
	@Input() countries : any = [];
	@Input() states : any = [];
	@Input() cities : any = [];
	@Output() address = new EventEmitter<any>();
	body: any;

	constructor(public http: HttpClient, public router: Router, private _activeRoute: ActivatedRoute) { }

	ngOnInit() {
		this.getCountries();
	}

	fullAddress () {
		var full_address = '';
		Object.keys(this.localization).forEach(element => {
			full_address += ( this.localization[element] != null ) ? ' ' + this.localization[element]  : '';
		});
		console.log(full_address);
		this.address.emit( full_address );
	}

	getCountries() {
		this.loading = true;
		const headers = new HttpHeaders().set('Authorization', window.location.origin)
			.append('user_id', sessionStorage.getItem('user_id'))
			.append('token', sessionStorage.getItem('user_token'))
			.append('app', 'bananaCli');
		const options =  {
			headers: headers,
		};
		this.http.get(BananaConstants.urlServer+'api/location/countries', options).toPromise().then(
			result => {
				this.loading = false;
				this.body = result;
				this.countries = this.body.countries;
			},
			msg => {
				if (msg.status == 406) {
					tokenUtil(this.router);
				}
				this.loading = false
				notifyManage(msg);
			}
		);
	}

	getStates(country_id) {
		this.loading = true;
		this.states = [];
		this.cities = [];
		const headers = new HttpHeaders().set('Authorization', window.location.origin)
			.append('user_id', sessionStorage.getItem('user_id'))
			.append('token', sessionStorage.getItem('user_token'))
			.append('app', 'bananaCli');
		const options =  {
			headers: headers,
		};
		this.http.get(BananaConstants.urlServer+'api/location/states?country_id='+country_id, options).toPromise().then(
			result => {
				this.loading = false;
				this.body = result;
				this.states = this.body.states;
			},
			msg => {
				if (msg.status == 406) {
					tokenUtil(this.router);
				}
				this.loading = false;
				notifyManage(msg);
			}
		);
	}

	getCities(state_id) {
		this.loading = true;
		this.cities = [];
		const headers = new HttpHeaders().set('Authorization', window.location.origin)
			.append('user_id', sessionStorage.getItem('user_id'))
			.append('token', sessionStorage.getItem('user_token'))
			.append('app', 'bananaCli');
		const options =  {
			headers: headers,
		};
		this.http.get(BananaConstants.urlServer+'api/location/cities?state_id='+state_id, options).toPromise().then(
			result => {
				this.loading = false;
				this.body = result;
				this.cities = this.body.cities;
			},
			msg => {
				if (msg.status == 406) {
					tokenUtil(this.router);
				}
				this.loading = false;
				notifyManage(msg);
			}
		);
	}

	openLocalizationModal(){
		setTimeout( function(){
			$('#localizationModal').modal('show');
		},
		230);
	}

}
