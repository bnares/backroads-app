import image1 from "./images/tour-1.jpeg"
import image2 from "./images/tour-2.jpeg"
import image3 from "./images/tour-3.jpeg"
import image4 from "./images/tour-4.jpeg"

export type Tours = {
    id:number,
    image:string,
    date:string,
    title:string,
    text:string,
    subTirle:string,
    subtDays:string
    subPrice:string,

}

export type PageLinks = {
    link : JSX.Element
}

export type SocialLinks = {
    id:number,
    href:string,
    icon:JSX.Element
}


export type Services = {
    id:number,
    icon: JSX.Element,
    title:string,
    text:string
}

export const AppLinks : PageLinks[] = [
    {
        link:<a href="#home" className="nav-link">home</a>
    },
    {
        link:<a href="#about" className="nav-link">about</a>,
    },
    {
        link:<a href="#services" className="nav-link">services</a>,
    },
    {
        link:<a href="#tours" className="nav-link"> tours</a>
    }
]

export const SocialData :SocialLinks[] = [
    {id:1, href:"https://www.twitter.com", icon:<i className="fab fa-facebook"></i>},
    {id:2, href:"https://www.twitter.com", icon:<i className="fab fa-twitter"></i>},
    {id:3, href:"https://www.twitter.com", icon:<i className="fab fa-squarespace"></i>},
]

export const ServicesData :Services[] = [
    {id:1, icon:<i className="fas fa-wallet fa-fw"></i>, title:"saving money", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."},
    {id:2, icon:<i className="fas fa-tree fa-fw"></i>, title:"endless hiking", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, offici"},
    {id:3, icon:<i className="fas fa-socks fa-fw"></i>, title:"amazing comfort", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."},
]

export const ToursData: Tours[]=[
    {
        id:1,
        image:image1,
        date:"august 26th, 2020",
        title:"Tibet Adventure",
        text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        subTirle:"Kenya",
        subtDays:"6",
        subPrice:"2100",

    },
    {
        id:2,
        image:image2,
        date:"august 26th, 2020",
        title:"Tibet Adventure",
        text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        subTirle:"Kenya",
        subtDays:"20",
        subPrice:"4500",

    },
    {
        id:3,
        image:image3,
        date:"august 26th, 2020",
        title:"Explore Honk-Kong",
        text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        subTirle:"Honk-Kong",
        subtDays:"14",
        subPrice:"4500",

    },
    {
        id:4,
        image:image4,
        date:"august 26th, 2020",
        title:"Tibet Adventure",
        text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        subTirle:"Madagaskar",
        subtDays:"20",
        subPrice:"4500",

    }
]

