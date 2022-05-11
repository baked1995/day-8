class person
{
    constructor(name,age,gender,city,id){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.city=city;
        this.id=id;
}
getname()
{
    console.log(`Name: ${this.name}`);

}
getage()
{
    console.log(`Age: ${this.age}`);

}
getgender()
{
    console.log(`Gender: ${this.gender}`);

}
getcity()
{
    console.log(`City: ${this.city}`);

}
getid()
{
    console.log(`ID: ${this.id}`);

}

}
let dat=new person("Harshit",25,"Male","Bangalore","101");

dat.getname();
dat.getage();
dat.getgender();
dat.getcity();
dat.getid();