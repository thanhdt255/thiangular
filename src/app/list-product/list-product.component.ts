import { Component, OnInit } from '@angular/core';
interface Product 
{
  name:string;
  price: string;
  id: number;
}
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productEditRequest!: Product;

  products: Product[]=[{
    name: "Product One",
    price:"$22.05",
    id: 1
  },
  {
    name: "Product two",
    price:"$21.5",
    id: 2
  },
  {
    name: "Product three",
    price:"$22",
    id: 3
  }]
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.products.push(this.productAddRequest);
  }

  openEdit(id: any){
    this.productEditRequest = this.products.filter(x => x.id == id)[0];
  }

  saveEdit(){
    let product = this.products.filter(x => x.id == this.productEditRequest.id)[0]; 
    product = this.productEditRequest;
  }

  delete(id: number){
    this.products = this.products.filter(x => x.id != id);
  }
  productAddRequest: Product = {
    name:'',
    price:"0",
    id:0
  }
}
