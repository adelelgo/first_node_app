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
      materials: [
        { id: 1, material_name: "Math", grade: 0 },
        { id: 2, material_name: "bio", grade: 0 },
        { id: 3, material_name: "social", grade: 0 },
        { id: 4, material_name: "arabic", grade: 0 },
        { id: 5, material_name: "english", grade: 0 },
        { id: 6, material_name: "french", grade: 0 },
      ],
    });
    saveAllData(allData);
  } else {
    console.log("Error Dublicated ID");
  }
};

const addSumAndAvarege = () => {
  const allData = loadData();

  // console.log(allData.length);
  if (allData.length > 0) {
    saveAllData(allData);
  } else {
    console.log("Error addSumAndAvarege");
  }
};

const resetSumAndAvarege = () => {
  const allData = loadData();

  allData.forEach((element) => {
    element.total = 0;
    element.avg = 0;
  });

  saveAllData(allData);
};

const getPersonById = (id) => {
  const allData = loadData();

  const itemNeeded = allData.find((obj) => {
    return obj.id == id;
  });
  //   console.log(getData);

  if (itemNeeded) {
    // calculateSum(itemNeeded.materials)
    console.log(itemNeeded);
  } else {
    console.log("No Data");
  }
};

const addAdditionalFields = (arr) => {
  arr.forEach((element) => {
    element.total = 0;
    element.avg = 0;
  });

  // data111.materials.array.forEach((element) => {
  //   element.total = 0;
  // });
  // calculateSum(element.materials);
  return arr;
};

const calculateSumAndAvg = (arr) => {
  try {
    let total1 = 0;
    let x = 0;
    arr.forEach((element) => {
      total1 = 0;
      x = 0;
      element.materials.forEach((material_single) => {
        total1 += material_single.grade;
        x += 1;
      });
      element.total = total1;
      element.avg = total1 / x;
    });
    return arr;
  } catch {
    console.log("Error In calculateSum ");
    return arr;
  }

  // return arr.reduce((total, current) => {
  //   return total.total + current.total;
  // }, 0);
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
    console.log(
      item.fname,
      item.lname,
      "Total : " + item.total,
      "The Avarage : " + item.avg
    );
  });
};

const loadData = () => {
  try {
    const dataJson = fs.readFileSync("data10.json").toString();

    const dataObj = addAdditionalFields(JSON.parse(dataJson));

    const dataObj2 = calculateSumAndAvg(dataObj);

    return dataObj2;
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
  addSumAndAvarege,
  resetSumAndAvarege,
};
