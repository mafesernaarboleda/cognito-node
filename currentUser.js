AWSCognito.config.region = 'us-west-2';

var authenticationData = {
    Username : 'maria@batteries911.com',
    Password : 'Mafe2015*'
};

AWSCognito.config.update({'accessKeyId': 'AKIAIHEQN3BFI32ENHRQ',
    'secretAccessKey': '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'});

var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);

var poolData = {
    UserPoolId : 'us-west-2_ZXZoYcorg',
    ClientId : '2j4403tbvvke8enhf2fof6l4t7'
};

var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

var userData = {
    Username : 'maria@batteries911.com',
    Pool : userPool
};

var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        console.log('access token + ' + result.getAccessToken().getJwtToken());

        //GET CURRENT USER AUTHENTICATED
        var currentUser = userPool.getCurrentUser();
        if (currentUser != null) {
            currentUser.getSession(function(err, session) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('session validity: ' + session.isValid());
                AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                    IdentityPoolId : 'us-west-2:9054249d-c993-4733-b588-f0d36bc74d59'
                });
            });
        }
    },
    onFailure: function(err) {
        console.log('err',err);
    }
});





