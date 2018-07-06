export class Third {
  public id : number;
  public organization_id : number;
  public logo : string;
  public is_customer : boolean;
  public is_vendor : boolean;
  public name : string;
  public name_2 : string;
  public is_employee : boolean;
  public is_prospect : boolean;
  public is_sales_rep : boolean;
  public reference_no : string;
  public sales_rep_id : number;
  public credit_status : string;
  public credit_limit : number;
  public tax_id : number;
  public is_tax_exempt : boolean;
  public is_pot_tax_exempt : boolean;
  public url : string;
  public description : string;
  public is_summary : boolean;
  public price_list_id : number;
  public delivery_rule : string;
  public delivery_via_rule : string;
  public flat_discount : number;
  public is_manufacturer : boolean;
  public po_price_list_id : number;
  public language_id : number;
  public greeting_id : number;
  
  constructor(){
    this.id = 0;
    this.organization_id  = null;
    this.logo  = '';
    this.is_customer  = false;
    this.is_vendor  = false;
    this.name  = '';
    this.name_2  = '';
    this.is_employee  = false;
    this.is_prospect  = false;
    this.is_sales_rep  = false;
    this.reference_no  = '';
    this.sales_rep_id  = null;
    this.credit_status  = null;
    this.credit_limit  = 0;
    this.tax_id  = null;
    this.is_tax_exempt  = false;
    this.is_pot_tax_exempt  = false;
    this.url  = '';
    this.description  = '';
    this.is_summary  = false;
    this.price_list_id  = null;
    this.delivery_rule  = '';
    this.delivery_via_rule  = '';
    this.flat_discount  = 0;
    this.is_manufacturer  = false;
    this.po_price_list_id  = null;
    this.language_id  = null;
    this.greeting_id  = null;
  }
}