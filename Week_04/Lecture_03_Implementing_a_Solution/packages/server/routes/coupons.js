import { Router } from "express";
import { Coupon } from "../models";

const couponsRoutes = Router();

couponsRoutes.get("/create", async (req, res) => {
  const { code, discount } = req.query;
  if (!code || !discount) {
    return res.status(422).json({ error: "Code and discount are required." });
  }

  try {
    await Coupon.create({
      code: code.toUpperCase(),
      discount: discount,
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

couponsRoutes.get("/verify", async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.sendStatus(422);
  }

  try {
    const coupon = await Coupon.findOne({ code: code.toUpperCase() });
    if (!coupon) {
      return res.sendStatus(404);
    }
    res.json(coupon.discount);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default couponsRoutes;
