var AWS = require('aws-sdk');
var AWSCognito = require('amazon-cognito-identity-js');
AWS.config.region = 'us-west-2';

var poolData = {
    UserPoolId : 'us-west-2_7tfo8iQqC',
    ClientId : '282pl9q5o1sn0jqdfp54jcsjs1'
};
var userPool = new AWSCognito.CognitoUserPool(poolData);


var attributeList = [];


var dataGiven = {
    Name : 'given_name',
    Value : 'changos'
};
var dataFamily = {
    Name : 'family_name',
    Value : 'changos'
};
var dataPicture = {
    Name : 'picture',
    Value : 'changos'
};
var dataEmail = {
    Name : 'email',
    Value : 'changos@batteries911.com'
};
var dataEmailVer = {
    Name : 'email_verified',
    Value : 'true'
};
var dataGender = {
    Name : 'gender',
    Value : 'female'
};
var dataBirthdate = {
    Name : 'birthdate',
    Value : '21/07/1993'
};
var dataLocale = {
    Name : 'locale',
    Value : 'm'
};
var dataPhoneNumber = {
    Name : 'phone_number',
    Value : '+573217641480'
};
var dataAddress = {
    Name : 'address',
    Value : 'cra 67A # 93 - 44'
};
var dataUpdatedat = {
    Name : 'updated_at',
    Value : '1'
};
var dataMfa_enabled = {
    Name : 'cognito:mfa_enabled',
    Value : 'true'
};
var dataUsername = {
    Name : 'cognito:username',
    Value : 'changos@batteries911.com'
};

var dataCountry ={
    Name: 'custom:country',
    Value: 'Colombia'
};

var dataState ={
    Name:'custom:state',
    Value: 'Antioquia'
};

var dataCity ={
    Name:'custom:city',
    Value: 'Medellin'
};

var dataPhoneAlternative={
    Name:'custom:alternativePhone',
    Value:'+573217641480'
};

var dataUsertype={
    Name:'custom:userType',
    Value: '1'
};

var dataLenguage= {
    Name : 'custom:language',
    Value : 'EN'
};

var dataZipcode ={
    Name: 'custom:zipcode',
    Value: '6666'
};

var dataStatus ={
    Name: 'custom:status',
    Value: 'ACTIVE'
};


var attributeGiveName = new AWSCognito.CognitoUserAttribute(dataGiven);
var attributeFamily = new AWSCognito.CognitoUserAttribute(dataFamily);
var attributePicture = new AWSCognito.CognitoUserAttribute(dataPicture);
var attributeEmail = new AWSCognito.CognitoUserAttribute(dataEmail);
var attributeGender = new AWSCognito.CognitoUserAttribute(dataGender);
var attributeBirthDate = new AWSCognito.CognitoUserAttribute(dataBirthdate);
var attributeLocate = new AWSCognito.CognitoUserAttribute(dataLocale);
var attributePhoneNumber = new AWSCognito.CognitoUserAttribute(dataPhoneNumber);
var attributeAddress = new AWSCognito.CognitoUserAttribute(dataAddress);
var attributeUpdatedat= new AWSCognito.CognitoUserAttribute(dataUpdatedat);
var attributeCountry = new AWSCognito.CognitoUserAttribute(dataCountry);
var attributeState = new AWSCognito.CognitoUserAttribute(dataState);
var attributeCity = new AWSCognito.CognitoUserAttribute(dataCity);
var attributePhoneAlternative = new AWSCognito.CognitoUserAttribute(dataPhoneAlternative);
var attributeUsertype = new AWSCognito.CognitoUserAttribute(dataUsertype);
var attributeLenguage = new AWSCognito.CognitoUserAttribute(dataLenguage);
var attributeZipcode= new AWSCognito.CognitoUserAttribute(dataZipcode);
var attributeStatus= new AWSCognito.CognitoUserAttribute(dataStatus);

attributeList.push(attributeGiveName);
attributeList.push(attributeFamily);
attributeList.push(attributePicture);
attributeList.push(attributeEmail);
attributeList.push(attributeGender);
attributeList.push(attributeBirthDate);
attributeList.push(attributeLocate);
attributeList.push(attributePhoneNumber);
attributeList.push(attributeAddress);
attributeList.push(attributeUpdatedat);
attributeList.push(attributeCountry);
attributeList.push(attributeState);
attributeList.push(attributeCity);
attributeList.push(attributePhoneAlternative);
attributeList.push(attributeUsertype);
attributeList.push(attributeLenguage);
attributeList.push(attributeZipcode);
attributeList.push(attributeStatus);

userPool.signUp('changos@batteries911.com', 'Mafe1993*', attributeList, null, function(err, result){
    if (err) {
        console.log(err);
        return;
    }
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});
