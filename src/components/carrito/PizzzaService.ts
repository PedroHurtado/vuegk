
export interface Pizza {
    id: string,
    name: string,
    price: number
}  

const pizzas: Pizza[] = [
    {id:'1', name:'Margarita', price: 5},
    {id:'2', name:'Pepperoni', price: 7},
    {id:'3', name:'Hawaiana', price: 8},
    {id:'4', name:'Mexicana', price: 9},
    {id:'5', name:'Barbacoa', price: 10},
    {id:'6', name:'Cuatro Quesos', price: 11},
    {id:'7', name:'Vegetariana', price: 6},
    {id:'8', name:'Pollo', price: 8},
    {id:'9', name:'Carne', price: 9},
    {id:'10', name:'Pescado', price: 10},
    {id:'11', name:'Mariscos', price: 12},
    {id:'12', name:'Champiñones', price: 6},
    {id:'13', name:'Jamón', price: 7},
    {id:'14', name:'Salami', price: 8},
    {id:'15', name:'Tres Carnes', price: 11},
    {id:'16', name:'Tres Quesos', price: 10},
    {id:'17', name:'Tres Pescados', price: 12},
    {id:'18', name:'Tres Mariscos', price: 13},
    {id:'19', name:'Tres Champiñones', price: 7},
    {id:'20', name:'Tres Jamón', price: 8},
    {id:'21', name:'Tres Salami', price: 9},
    {id:'22', name:'Cinco Carnes', price: 13},
    {id:'23', name:'Cinco Quesos', price: 12},
    {id:'24', name:'Cinco Pescados', price: 14},
    {id:'25', name:'Cinco Mariscos', price: 15},
    {id:'26', name:'Cinco Champiñones', price: 9},
    {id:'27', name:'Cinco Jamón', price: 10},
]
export class ServicePizza{
    getAll():Pizza[]{
        return pizzas
    }
    getById(id:string):Pizza|undefined{
        return pizzas.find(pizza => pizza.id === id)
    }
}