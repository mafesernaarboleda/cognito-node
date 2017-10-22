AWSCognito.config.region = 'us-west-2';

AWSCognito.config.update({'accessKeyId': 'AKIAIHEQN3BFI32ENHRQ',
    'secretAccessKey': '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'});

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

cognitoUser.forgotPassword({
    onSuccess: function (result) {
        console.log('call result: ' + result);
    },
    onFailure: function(err) {
        console.log(err);
    },
    inputVerificationCode: function() {
        var verificationCode = prompt('Please input verification code ' ,'');
        var newPassword = prompt('Enter new password ' ,'');
        cognitoUser.confirmPassword(verificationCode, newPassword, this);
    }
});
