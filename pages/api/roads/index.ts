import { MOCK_DESTINATIONS_DATA, MOCK_ORIGINS_DATA } from "mocks/roads/roads";
import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../utils/sample-data";

const roads = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json({
      roads: [
        {
          origin: MOCK_ORIGINS_DATA,
          destination: MOCK_DESTINATIONS_DATA,
        },
      ],
    });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default roads;
