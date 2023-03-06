export class randomizer{

 public static randomizeEmail(email : string): string {
 const [username, domain] = email.split('@');
 const randomNumber = Math.floor(Math.random() * 10000);

 return username + randomNumber + '@' + domain;
};
}