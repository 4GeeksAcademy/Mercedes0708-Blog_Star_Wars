const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters:[],
			planets:[],
			starships: [],			
		},
		actions: {
			addFav:(name,id)=>{
				const store = getStore();
				if(!store.favorites.filter((fav) => fav.id === id).length){
					setStore({favorites:[...store.favorites,{name, id}]})
					}
			},
			deleteFav:(index)=>{
				const store = getStore();
				setStore({favorites:[...store.favorites.filter((fav) => fav.id !== index)]});
				},
				
			getCharacters: ()=>{
				fetch ("https://swapi.dev/api/people/")
				.then (response=>response.json())
				.then (data=>{
					console.log(data.results)
					setStore({characters:data.results})
				})
			},
			
			getPlanets: ()=>{
				fetch ("https://swapi.dev/api/planets/")
				.then (response=>response.json())
				.then (data=>{
					console.log(data.results)
					setStore({planets:data.results})
				})
			},
			getStarships: ()=>{
				fetch ("https://swapi.dev/api/starships/")
				.then (response=>response.json())
				.then (data=>{
					console.log(data.results)
					setStore({starships:data.results})
				})
			},
		}
	};
};

export default getState;
