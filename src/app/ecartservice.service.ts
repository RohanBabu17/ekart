import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Tag } from './model/category';
import { Dress } from './model/dress';

@Injectable({
  providedIn: 'root'
})
export class EcartserviceService {

  public viewData: any;
  constructor() { }
  data(): Dress[] {
    return [
      {
        id: 1,
        name: "Men Regular Fit Solid Casual Shirt",
        Rs: 650,
        img: "../../assets/men1.webp",
        category: "men",
        Tag: ["men"]

      },
      {
        id: 2,
        name: "Men Slim Fit Solid Spread Collar Casual Shirt",
        Rs: 450,
        img: "../../assets/men2.webp",
        category: "men",
        Tag: ["men"]

      },
      {
        id: 3,
        name: "Mast & Harbour Shirt ",
        Rs: 450,
        img: "../../assets/men3.webp",
        category: "men",
        Tag: ["men"]

      },
      {
        id: 4,
        name: "Roadster t-Shirt ",
        Rs: 550,
        img: "../../assets/men4.webp",
        category: "men",
        Tag: ["men"]

      },
      {
        id: 5,
        name: "Carbonn Cloth Shirt ",
        Rs: 550,
        img: "../../assets/men5.webp",
        category: "men",
        Tag: ["men"]

      },
      {
        id: 6,
        name: "icome Shirt ",
        Rs: 550,
        img: "../../assets/men6.webp",
        category: "men",
        Tag: ["men"]

      },
      {
        id: 7,
        name: "Tanip Shirt ",
        Rs: 550,
        img: "../../assets/men7.webp",
        category: "men",
        Tag: ["men"]

      },
      {
        id: 8,
        name: "Woven Banarasi Jacquard Saree  (Purple) ",
        Rs: 597,
        img: "../../assets/women1.webp",
        category: "women",
        Tag: ["women"]

      },
      {
        id: 9,
        name: "Solid/Plain Bollywood Silk Blend, Satin Saree ",
        Rs: 597,
        img: "../../assets/women2.webp",
        category: "women",
        Tag: ["women"]

      },
      {
        id: 10,
        name: "Satin Saree black ",
        Rs: 597,
        img: "../../assets/women3.webp",
        category: "women",
        Tag: ["women"]

      },
      {
        id: 11,
        name: "Printed, Floral Print Daily Wear Chiffon Saree  (Multicolor) ",
        Rs: 597,
        img: "../../assets/women4.webp",
        category: "women",
        Tag: ["women"]

      },
      {
        id: 12,
        name: "Embellished Bollywood Net Saree  (Black, Grey)",
        Rs: 597,
        img: "../../assets/women5.webp",
        category: "women",
        Tag: ["women"]

      },
      {
        id: 13,
        name: "Embellished Bollywood  Saree  (green)",
        Rs: 597,
        img: "../../assets/women6.webp",
        category: "women",
        Tag: ["women"]

      },
      {
        id: 14,
        name: "Printed, Geometric Print Kanjivaram Cotton Silk Saree  ",
        Rs: 597,
        img: "../../assets/women7.webp",
        category: "women",
        Tag: ["women"]

      },
      {
        id: 15,
        name: "Orange Sweatshirt  ",
        Rs: 597,
        img: "../../assets/kids1.webp",
        category: "kids",
        Tag: ["kids"]
      },
      {
        id: 16,
        name: "Blue Sweatshirt  ",
        Rs: 597,
        img: "../../assets/kids2.webp",
        category: "kids",
        Tag: ["kids"]

      },
      {
        id: 17,
        name: "Red arty Dress ",
        Rs: 597,
        img: "../../assets/kids3.jpg",
        category: "kids",
        Tag: ["kids"]

      },
      {
        id: 18,
        name: "Kids T-shirt ",
        Rs: 597,
        img: "../../assets/kids8.webp",
        category: "kids",
        Tag: ["kids"]

      },
      {
        id: 19,
        name: "Barbie Girls Midi/Knee Length Casual Dress    ",
        Rs: 597,
        img: "../../assets/kids5.webp",
        category: "kids",
        Tag: ["kids"]

      },
      {
        id: 20,
        name: "MAX Girls Midi/Knee Length Casual Dress   ",
        Rs: 597,
        img: "../../assets/kids6.webp",
        category: "kids",
        Tag: ["kids"]

      },
      {
        id: 21,
        name: "pink Sweatshirts ",
        Rs: 597,
        img: "../../assets/kids7.webp",
        category: "kids",
        Tag: ["kids"]

      },
      {
        id:22,
        name: "Grey t-shirt",
        Rs:600,
        img:"../../assets/model4.jpg",
        category:"men"

      }

    ]
  }

  getAllCategory(): Tag[] {
    return [
      {name:'All',count:21,image:''},
      { name: 'Men', count: 7, image: '' },
      { name: 'Women', count: 7, image: '' },
      { name: 'Kids', count: 7, image: '' }
    ]
  }
  getDessById(id:number):Dress{
    return this.data().find(item=>item.id == id)!;
  }
  getCategory(Tag:string):Dress[]{
    return Tag =='all'?this.data(): this.data().filter(item=>item.Tag?.includes(Tag))
  }


  getdata() {
    return <any>(this.data)
  }
  // getdatabyid(id: any) {
  //   this.data.forEach((item: any) => {
  //     if (item.id == id) {
  //       console.log(item);
  //       this.viewData = item;
  //       return this.viewData
  //     }
  //   })
  // }
  adduser(user: any) {
    let users = [];
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users')!);
      users = [user, ...users];
    }
    else {
      users = [user];
    }
    localStorage.setItem('users', JSON.stringify(users));
  }
  authuser(user: any) {
    let userarray = [];
    if (localStorage.getItem('users')) {
      userarray = JSON.parse(localStorage.getItem('users')!);
    }
    return userarray.find((p:any) => p.Name === user.Name && p.Password === user.Password);
  }
}
