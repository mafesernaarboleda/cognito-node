var AWS = require('aws-sdk');
var AWSCognito = require('amazon-cognito-identity-js');

AWS.config.region = 'us-west-2';

var poolData = {
    UserPoolId : 'us-west-2_7tfo8iQqC',
    ClientId : '282pl9q5o1sn0jqdfp54jcsjs1'
};

var userPool = new AWSCognito.CognitoUserPool(poolData);
var userData = {
    Username : 'maria@batteries911.com',
    Pool : userPool
};

var cognitoUser = new AWSCognito.CognitoUser(userData);
cognitoUser.confirmRegistration('457727', true, function(err, result) {
    if (err) {
        alert(err);
        return;
    }
    console.log('call result: ' + result);
});