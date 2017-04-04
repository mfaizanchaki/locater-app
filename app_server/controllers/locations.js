module.exports.homeList = function(req, res){
    res.render('locations-list', {
        title: 'Loc8r - Find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapLine: 'Find places to work with wifi near you'
        },
        sidebar: "Looking for wifi and a seat near you? Loc8r helps you find places to work when you are out and about. Perhaps with Chai, cake or food? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Starcups',
            address: 'Food Street, Lahore',
            rating: 3,
            facilities: ['Chai', 'Food', 'Premium wifi'],
            distance: '100m'
        },{
            name: 'Mughlai Cafe',
            address: 'Food Street, Lahore',
            rating: 3,
            facilities: ['Chai', 'Premium wifi'],
            distance: '100m'
        },{
            name: 'Quetta Hotel',
            address: 'Food Street, Lahore',
            rating: 5,
            facilities: ['Chai', 'Food'],
            distance: '100m'
        }]
    });
};

module.exports.locationInfo = function(req, res){
    res.render('location-info', {title: 'Location Info'});
};

module.exports.addReview = function(req, res){
    res.render('location-review-form', {title: 'Add Review'});
};