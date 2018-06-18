app.controller('loginController', function($scope, $location) {
    var googleUser = {};
    var startApp = function() {
        gapi.load('auth2', function() {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            auth2 = gapi.auth2.init({
                client_id: '280049024688-6pdvusdp0sb2bmcgnj0v485gb8pupic5.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                // Request scopes in addition to 'profile' and 'email'
                //scope: 'additional_scope'
            });
            attachSignin(document.getElementById('customBtn'));
        });
    };

    function attachSignin(element) {
        console.log(element.id);
        auth2.attachClickHandler(element, {},
            function(googleUser) {
                document.getElementById('name').innerText = "Signed in: " +
                    googleUser.getBasicProfile().getName();
                // console.log("state", $state)
                console.log('ID: ' + googleUser.getBasicProfile().getId());
                console.log('Full Name: ' + googleUser.getBasicProfile().getName());
                console.log('Given Name: ' + googleUser.getBasicProfile().getGivenName());
                console.log('Family Name: ' + googleUser.getBasicProfile().getFamilyName());
                console.log('Image URL: ' + googleUser.getBasicProfile().getImageUrl());
                console.log('Email: ' + googleUser.getBasicProfile().getEmail());

            },
            function(error) {
                alert(JSON.stringify(error, undefined, 2));
            });
    }
    startApp();

});