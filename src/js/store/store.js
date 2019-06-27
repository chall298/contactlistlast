const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [
				{
					full_name: "chris hall", 
					e_mail: "gfgrfef@gmail.com", 
					address: "miami mall",
					phone: "954-999-9999",
					image: "https://scontent-sea1-1.cdninstagram.com/vp/bae855d6397705858a459a0b0a20dcd2/5D5A1656/t51.2885-19/s150x150/54771058_785767531795212_1635413311686180864_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com"
					
				},
				
				{
					full_name: "jake hill", 
					e_mail: "lololol@aol.com", 
					address: "davie mall",
					phone: "954-998-9998",
					image: "data:image/jpeg;base64,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"
					
				}, 
				
				{
					full_name: "mark brownlee", 
					e_mail: "eovjrdo@outlook.com",
					address: "broward mall",
					phone: "954-997-9997",
					image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg"
					
				},
				
				{
					full_name: "oprah winfrey", 
					e_mail: "lbtrykk@yahoo.com",
					address: "westpalm mall",
					phone: "954-996-9996",
					image: "https://timedotcom.files.wordpress.com/2018/12/Oprah-responds-to-million-dollar-chicken-recipe.jpg"
					
				}]
		},
		
			actions: {
			editElement: bear => {
				var tempStore = getStore();
				tempStore.contacts.push(bear);
				setStore({ tempStore });
			},
			deleteElement: (elem, id) => {
				fetch('https://assets.breatheco.de/apis/fake/contact/' + id, {
					method: 'DELETE'
					
				})
				.then(res => res.json())
				.then( response => {
				if(response.msg === "ok") {
				const tempStore = getStore(); 
					let filteredArray = tempStore.contacts.filter (removeId => {
						return removeId.id !== id;
					});
					setStore({contacts: filteredArray});
					}
				});
				
			},
			addContact: ({ full_name, address, email, phone }) => {
				fetch('https://assets.breatheco.de/apis/fake/contact/', {
					method: 'POST',
					body: JSON.stringify({address: address, full_name: full_name, email: email, phone: phone, agenda_slug: "alejo"}),
					headers: {
					'Content-Type': 'application/json',
					'Accept' : 'application/json'
					}
				})
				.then(res => res.json())
				.then(horse => {
					var temp = getStore();
					temp.contacts = horse;
					setStore({ temp });
				
				});
			
			},
	


			fetchAll: () => {
				fetch(" https://assets.breatheco.de/apis/fake/contact/agenda/alejo")
					.then(res => res.json())
					.then(horse => {
						var temp = getStore();
						temp.contacts = horse;
						setStore({ temp });
					});
			
			}
			
		}
	};
};

export default getState;


