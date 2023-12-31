const mejaModel = require(`../models/index`).meja;
const Op = require(`sequelize`).Op;
const { path } = require(`../models/meja`);
const fs = require(`fs`);
const md5 = require(`md5`);
const mysql = require("mysql2");

exports.getAllMeja = async (request, response) => {
  mejaModel
    .findAll()
    .then((result) => {
      response.json({
        data: result,
      });
    })
    .catch((error) => {
      response.json({
        message: error.message,
      });
    });
};

exports.findMeja = async (request, response) => {
  let nomer_meja = request.body.keyword;

  let meja = await mejaModel.findAll({
    where: {
      [Op.or]: [{ nomer_meja: { [Op.substring]: nomer_meja } }],
    },
  });
  return response.json({
    success: true,
    data: meja,
    message: `All meja have been loaded`,
  });
};

exports.addMeja = async (request, response) => {
  let data = {
    nomer_meja: request.body.nomer_meja,
  };
  console.log(data);
  mejaModel
    .create(data)
    .then((result) => {
      response.json({
        message: "Data Berhasil Ditambahkan",
        data: result,
      });
    })
    .catch((error) => {
      response.json({
        message: error.message,
      });
    });
};

exports.updateMeja = async (request, response) => {
  let data = {
    nomer_meja: request.body.nomer_meja,
    status: request.body.status
  };

  let id = request.params.id;

  mejaModel
    .update(data, { where: { id: id } })
    .then((result) => {
      response.json({
        success: true,
        message: "data berhasil di ganti",
      });
    })

    .catch((error) => {
      response.json({
        message: error.message,
      });
    });
};

exports.deleteMeja = (request, response) => {
  let id = request.params.id;

  mejaModel
    .destroy({ where: { id: id } })
    .then((result) => {
      return response.json({
        success: true,
        message: `Data meja has been deleted`,
      });
    })
    .catch((error) => {
      return response.json({
        success: false,
        message: error.message,
      });
    });
};
