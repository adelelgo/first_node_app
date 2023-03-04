const data10 = require("./data10");

const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "aaaaaaaaaaaaaa",
  builder: {
    fname: {
      describe: "adding f name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "adding l name",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.addPerson(x.id, x.fname, x.lname, x.age, x.city);
  },
});

yargs.command({
  command: "addSumAndAvarege",
  describe: "add Sum And Avarege To All Data",
  builder: {},
  handler: (x) => {
    data10.addSumAndAvarege();
  },
});

yargs.command({
  command: "resetSumAndAvarege",
  describe: "Reset Sum And Avarege All Data",
  builder: {},
  handler: (x) => {
    data10.resetSumAndAvarege();
  },
});

yargs.command({
  command: "del",
  describe: "delllllllll",
  builder: {},
  handler: (x) => {
    data10.delPerson(x.id);
  },
});

yargs.command({
  command: "getById",
  describe: "get by id",
  builder: {
    id: {
      describe: "id ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.getPersonById(x.id);
  },
});

yargs.command({
  command: "getList",
  describe: "get age and city",
  builder: {},
  handler: (x) => {
    data10.getList();
  },
});

// console.log(yargs.argv);
yargs.parse();
