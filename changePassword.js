AWSCognito.config.region = 'us-west-2';

var authenticationData = {
    Username : 'maria@batteries911.com',
    Password : 'Mafe1993*'
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

        // CHANGE PASSWORD WITH USER AUTHENTICATED
        cognitoUser.changePassword('Mafe2015*', 'Mafe1993*', function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('call result: ' + result);
        });
    },
    onFailure: function(err) {
        console.log('err',err);
    }
});




