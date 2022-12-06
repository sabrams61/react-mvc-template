export const getId = () => {
    return 'r_' + Math.floor(Math.random() * 10000);
}

export const restaurants = [
    { id: getId(), rating: 5, price: 3, name: "Taqueria Mexico" },
    { id: getId(), rating: 2, price: 1, name: "Bonifacio's Burritos" },
    { id: getId(), rating: 3, price: 3, name: "Camila's Chimichangas" },
    { id: getId(), rating: 5, price: 2, name: "Ernesto's Enchiladas" },
    { id: getId(), rating: 4, price: 1, name: "Maria's Mole" },
    { id: getId(), rating: 1, price: 2, name: "Tito's Tacos" },
];

export const ratings = [1, 2, 3, 4, 5];

export const prices = [1, 2, 3];

export const newRestaurant = {
    id: null,
    rating: 1,
    price: 1,
    name: '',
}
