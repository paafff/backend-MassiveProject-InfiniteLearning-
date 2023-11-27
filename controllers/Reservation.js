const businessDb = require('../models/BusinessModel');
const reservationDb = require('../models/ReservationModel');

const createReservation = async (req, res) => {
  const { name, workerSelected, description, time, day, businessId } = req.body;

  try {
    await reservationDb.create({
      name: name,
      workerSelected: workerSelected,
      description: description,
      time: time,
      day: day,
      businessId: businessId,
      userId: req.userId,
    });

    res.status(200).json({ msg: 'berhasil menambahkan reservasi' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateReservation = async (req, res) => {
  try {
    await businessDb.update(
      { responseBusiness: responseBusiness.req.body },
      { where: { uuid: req.params.uuid } }
    );

    res.status(200).json({ msg: 'berhasil update data reservasi' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { createReservation, updateReservation };
