const apiKey = "UswPzSinc0qQKF30Akdpo_OkRanXYV6Nj-S245f6RcRY2hHOWO1jTvDG7Rv0RGNIsYE_Ya5lGNm_vZ0mxpfW2gn2tGS6lS97C9wD5RrM-8NkWAG16uwAG1VXrQNAYnYx";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term={term}&location={location}&sort_by={sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};


export default Yelp;
