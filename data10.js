const fs = require("fs");
// const allData = require("./alldata");

const addPerson = (id, fname, lname, age, city) => {
  const allData = loadData();

  const doplicatedData = allData.filter((obj) => {
    return obj.id === id;
  });
  //   console.log(doplicatedData);

  if (doplicatedData.length == 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    });
    saveAllData(allData);
  } else {
    console.log("Error Dublicated ID");
  }
};

const getPersonById = (id) => {
  const allData = loadData();

  const itemNeeded = allData.find((obj) => {
    return obj.id == id;
  });
  //   console.log(getData);

  if (itemNeeded) {
    console.log(itemNeeded);
  } else {
    console.log("No Data");
  }
};

const delPerson = (id) => {
  const allData = loadData();

  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id;
  });
  //   console.log(dataToKeep);
  saveAllData(dataToKeep);
};

const getList = () => {
  const allData = loadData();
  allData.map(function (item) {
    console.log(item.fname, item.lname);
  });
};

const loadData = () => {
  try {
    const dataJson = fs.readFileSync("data10.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

const saveAllData = (data1) => {
  const dataJson = JSON.stringify(data1);
  fs.writeFileSync("data10.json", dataJson);
};

module.exports = {
  addPerson,
  delPerson,
  getPersonById,
  getList,
};
