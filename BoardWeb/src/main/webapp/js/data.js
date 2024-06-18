/**
 * data.js
 */
const myMembers = [
	{id: 'user01', name: '홍길동', phone: '010-1111-2222', point: 90}, // new Object();
	{id: 'user02', naem: '박석민', phone: '010-2341-2321', point: 95},
	{id: 'user03', naem: '김시후', phone: '010-4567-7896', point: 120}
]; // new Array();

const json = `[{"id":1,"first_name":"Tish","last_name":"Hartgill","email":"thartgill0@npr.org","gender":"Female","salary":6916},
{"id":2,"first_name":"Ingemar","last_name":"Llewellen","email":"illewellen1@jimdo.com","gender":"Male","salary":4425},
{"id":3,"first_name":"Bevon","last_name":"Colegrove","email":"bcolegrove2@live.com","gender":"Male","salary":7343},
{"id":4,"first_name":"Bettine","last_name":"Georges","email":"bgeorges3@theguardian.com","gender":"Female","salary":7176},
{"id":5,"first_name":"Joceline","last_name":"Rockwell","email":"jrockwell4@arstechnica.com","gender":"Female","salary":4230},
{"id":6,"first_name":"Eileen","last_name":"Fourman","email":"efourman5@furl.net","gender":"Female","salary":3049},
{"id":7,"first_name":"Raoul","last_name":"Orchard","email":"rorchard6@washington.edu","gender":"Male","salary":6432},
{"id":8,"first_name":"Cleveland","last_name":"Flewin","email":"cflewin7@about.com","gender":"Male","salary":6370},
{"id":9,"first_name":"Stanfield","last_name":"Camin","email":"scamin8@imgur.com","gender":"Male","salary":7742},
{"id":10,"first_name":"Felice","last_name":"Eayres","email":"feayres9@uiuc.edu","gender":"Male","salary":5688},
{"id":11,"first_name":"Malanie","last_name":"Dodwell","email":"mdodwella@ehow.com","gender":"Female","salary":3635},
{"id":12,"first_name":"Laureen","last_name":"Geillier","email":"lgeillierb@fc2.com","gender":"Female","salary":7813},
{"id":13,"first_name":"Fraser","last_name":"Larvent","email":"flarventc@squarespace.com","gender":"Male","salary":7743},
{"id":14,"first_name":"Washington","last_name":"Hansill","email":"whansilld@google.cn","gender":"Male","salary":5034},
{"id":15,"first_name":"Andris","last_name":"Foottit","email":"afoottite@google.ca","gender":"Male","salary":3818}]`;

const employees = JSON.parse(json);
