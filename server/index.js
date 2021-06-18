require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const xlsx = require("xlsx");
const db = require("./models");

io.on("connection", (socket) => {
  console.log("success");

  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

const routes = require("./routes");
const handle = require("./handlers");

const sheets = xlsx.readFile("./BranchDocuments/BeetleNut_Data.xlsx", {
  cellDates: true,
});

const currentSheet = sheets.Sheets["Sheet1"];
const data = xlsx.utils.sheet_to_json(currentSheet);

app.use(bodyParser.json());
app.use(cors());

async function createBranch(element) {
  try {
    var pin = element["Pincode covered"];
    var obj = await db.Branch.create({
      Branch_Name: element["Branch Name"],
      password: element["Branch Name"],
      Pincode_covered: element["Pincode covered"],
    });
    await obj.save();
    if (typeof pin === "string") {
      var list = pin.split(", ");
      list.map(async (e) => {
        var serve = await db.Pincode.findOne({ pincode: e });
        if (serve) {
          serve.provider.push(element["Branch Name"]);
          await serve.save();
        } else {
          var pinServed = await db.Pincode.create({ pincode: e });
          pinServed.provider.push(element["Branch Name"]);
          await pinServed.save();
        }
      });
    } else {
      var serve = await db.Pincode.findOne({ pincode: pin });
      if (serve) {
        serve.provider.push(element["Branch Name"]);
        await serve.save();
      } else {
        var pinServed = await db.Pincode.create({ pincode: pin });
        pinServed.provider.push(element["Branch Name"]);
        await pinServed.save();
      }
    }
  } catch (err) {
    console.log(err);
  }
}

app.listen(5000, function () {
  console.log("Server is running on 5000");

  data.map((branch) => {
    createBranch(branch);
  });
});

app.use("/api/order", routes.order);
// app.use("/api/incharge", routes.incharge);
// app.use("/api/authority", routes.authority);
