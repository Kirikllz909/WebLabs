const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>
  res.send(
    "<p>Фамилия: Иванов</p>" +
      "<p>Имя: Иван</p>" +
      "<p>Отчество: Иванович</p>" +
      "<p>Телефон: +79362473092</p>" +
      "<p>Место рождения: Москва</p>" +
      "<p>Электронная почта: example@exmp.com</p>" +
      "<p>Образование: среднее</p>"
  )
);

app.listen(PORT);
