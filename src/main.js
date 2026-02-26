const hotels = [
      {id:1,name:"The Leela Palace",rating:4.9,price:15000,image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",location:"Chanakyapuri",amenities:["Pool","Spa","Restaurant","WiFi","Gym"],description:"Luxury palace hotel near diplomatic enclave",booking:"https://www.theleela.com/the-leela-palace-new-delhi/"},
      {id:2,name:"Taj Palace Hotel",rating:4.7,price:12000,image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",location:"Sardar Patel Marg",amenities:["Pool","Spa","Restaurant","WiFi","Parking"],description:"Iconic 5-star in the heart of Delhi",booking:"https://www.tajhotels.com/en-in/taj-palace-new-delhi/"},
      {id:3,name:"The Oberoi",rating:4.8,price:18000,image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",location:"Dr. Zakir Hussain Marg",amenities:["Pool","Spa","Restaurant","WiFi","Butler"],description:"Ultimate luxury in New Delhi",booking:"https://www.oberoihotels.com/hotels-in-new-delhi/"},
      {id:4,name:"ITC Maurya",rating:4.6,price:9500,image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",location:"Sardar Patel Marg",amenities:["Pool","Restaurant","WiFi","Gym","Bar"],description:"Award-winning luxury hotel",booking:"https://www.itchotels.com/in/ittc-maurya-new-delhi/"},
      {id:5,name:"The Grand Palace",rating:4.5,price:8500,image:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",location:"Connaught Place",amenities:["Restaurant","WiFi","Parking","Gym"],description:"Classic elegance in city center",booking:"https://www.thegrandhotels.com/"},
      {id:6,name:"Hyatt Regency",rating:4.4,price:7500,image:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",location:"Bhikaji Cama Place",amenities:["Pool","Spa","Restaurant","WiFi","Gym"],description:"Modern luxury in Delhi",booking:"https://www.hyatt.com/en-US/hotel/india/hyatt-regency-new-delhi/delrz"},
      {id:7,name:"Le Meridian",rating:4.3,price:6500,image:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",location:"Janpath",amenities:["Pool","Restaurant","WiFi","Parking"],description:"Elegant stay at Janpath",booking:"https://www.marriott.com/en-us/hotels/delap-le-meridien-new-delhi/overview/"},
      {id:8,name:"Radisson Blu",rating:4.2,price:5500,image:"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",location:"Paschim Vihar",amenities:["Pool","Restaurant","WiFi","Gym"],description:"Comfortable stay in West Delhi",booking:"https://www.radissonhotels.com/en-us/hotels/delhi-radisson-blu"},
      {id:9,name:"Holiday Inn",rating:4.1,price:4500,image:"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",location:"Mayur Vihar",amenities:["Restaurant","WiFi","Parking","Pool"],description:"Great value for families",booking:"https://www.ihg.com/holidayinn/hotels/us/en/delhi/delhi/hoteldetail"},
      {id:10,name:"The Pride Hotel",rating:4.0,price:3800,image:"https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",location:"Central Vista",amenities:["Restaurant","WiFi","Parking"],description:"Business hotel in center",booking:"https://www.pridehotel.com/delhi/"},
      {id:11,name:"Hotel City Palace",rating:3.9,price:2800,image:"https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",location:"Paharganj",amenities:["WiFi","Restaurant","Parking"],description:"Budget-friendly near railway station",booking:"https://www.hotelcitypalacedelhi.com/"},
      {id:12,name:"Bloomrooms New Delhi",rating:4.2,price:3200,image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",location:"Janpath",amenities:["WiFi","Restaurant"],description:"Stylish budget boutique",booking:"https://www.bloomrooms.com/"},
      {id:13,name:"Treetop Hotel",rating:3.8,price:2200,image:"https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800",location:"Karol Bagh",amenities:["WiFi","Parking"],description:"Affordable stay in Karol Bagh",booking:"https://www.treetophotel.com/"},
      {id:14,name:"FabHotel Stay",rating:4.1,price:2500,image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",location:"Multiple Locations",amenities:["WiFi","AC"],description:"Consistent quality across Delhi",booking:"https://www.fabhotels.com/"},
      {id:15,name:"Treebo Trend",rating:4.0,price:2300,image:"https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800",location:"Various Areas",amenities:["WiFi","Breakfast","AC"],description:"Quality budget accommodations",booking:"https://www.treebo.com/"},
      {id:16,name:"OYO Rooms",rating:3.9,price:1500,image:"https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=800",location:"All Over Delhi",amenities:["WiFi","AC"],description:"Budget stays everywhere",booking:"https://www.oyorooms.com/"},
      {id:17,name:"Z Hotel",rating:4.3,price:5200,image:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",location:"Nehru Place",amenities:["Pool","Restaurant","WiFi","Gym"],description:"Modern hotel in South Delhi",booking:"https://www.zhotels.in/"},
      {id:18,name:"Country Inn",rating:4.1,price:4200,image:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",location:"Rohini",amenities:["Pool","Restaurant","WiFi","Parking"],description:"Comfort in North Delhi",booking:"https://www.countryinn.in/"},
      {id:19,name:"Royal Rose Hotel",rating:4.4,price:5800,image:"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",location:"Maharani Bagh",amenities:["Spa","Restaurant","WiFi","Pool"],description:"Beautiful boutique hotel",booking:"https://www.royalrosehotel.com/"},
      {id:20,name:"Skyline Hotel",rating:4.2,price:4800,image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",location:"Dwarka",amenities:["Restaurant","WiFi","Gym","Parking"],description:"Modern stay in Dwarka",booking:"https://www.skylinehoteldelhi.com/"}
    ];

    let currentFilter = 'all';

    function renderHotels() {
      const filtered = currentFilter === 'all' ? hotels : 
        hotels.filter(h => currentFilter === 'luxury' && h.price >= 8000 ||
                          currentFilter === 'mid' && h.price >= 3000 && h.price < 8000 ||
                          currentFilter === 'budget' && h.price < 3000);
      document.getElementById('results').textContent = filtered.length + ' hotels found';
      document.getElementById('hotelsGrid').innerHTML = filtered.map(h => `
        <div class="hotel-card">
          <div class="hotel-image" style="background-image: url('${h.image}')">
            <span class="rating">⭐ ${h.rating}</span>
          </div>
          <div class="hotel-info">
            <h3>${h.name}</h3>
            <p class="location">📍 ${h.location}</p>
            <div class="amenities">${h.amenities.slice(0,4).map(a => `<span>${a}</span>`).join('')}</div>
            <p class="description">${h.description}</p>
            <div class="price-book">
              <div class="price"><span class="amount">₹${h.price.toLocaleString()}</span><span class="per">/night</span></div>
              <button class="book-btn" onclick="openModal(${h.id})">View Deal →</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    function setFilter(type, btn) {
      currentFilter = type;
      document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderHotels();
    }

    function filterHotels() { renderHotels(); }

    let selectedHotel = null;

    function openModal(id) {
      selectedHotel = hotels.find(h => h.id === id);
      document.getElementById('modalImage').src = selectedHotel.image;
      document.getElementById('modalTitle').textContent = selectedHotel.name;
      document.getElementById('modalLocation').textContent = '📍 ' + selectedHotel.location;
      document.getElementById('modalAmenities').innerHTML = selectedHotel.amenities.map(a => `<span>${a}</span>`).join('');
      document.getElementById('modalDesc').textContent = selectedHotel.description;
      document.getElementById('modal').classList.add('active');
    }

    function closeModal(e) {
      if (!e || e.target === document.getElementById('modal')) {
        document.getElementById('modal').classList.remove('active');
      }
    }

    document.getElementById('modalCheckin').addEventListener('change', function() {
      const cin = this.value;
      const cout = document.getElementById('modalCheckout');
      if (cin && cout.value && new Date(cout.value) <= new Date(cin)) {
        const next = new Date(cin);
        next.setDate(next.getDate() + 1);
        cout.value = next.toISOString().split('T')[0];
      }
      updatePrice();
    });

    document.getElementById('modalCheckout').addEventListener('change', updatePrice);

    function updatePrice() {
      const cin = document.getElementById('modalCheckin').value;
      const cout = document.getElementById('modalCheckout').value;
      if (cin && cout && selectedHotel) {
        const nights = Math.ceil((new Date(cout) - new Date(cin)) / (1000*60*60*24));
        if (nights > 0) {
          document.getElementById('priceSummary').innerHTML = `
            <p>₹${selectedHotel.price} × ${nights} night${nights>1?'s':''}</p>
            <p class="total">Total: ₹${(selectedHotel.price * nights).toLocaleString()}</p>
          `;
          return;
        }
      }
      document.getElementById('priceSummary').innerHTML = '';
    }

    document.getElementById('bookBtn').addEventListener('click', function() {
      if (!selectedHotel) return;
      window.open(selectedHotel.booking, '_blank');
      closeModal();
    });

    renderHotels();
