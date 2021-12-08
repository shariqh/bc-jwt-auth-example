import {serviceAccountClient} from "../../../../lib/utils/initBox"

export default async (_, res) => {

  const response = await serviceAccountClient.enterprise.getUsers()
  console.log(response)

  return res.status(200).json(response)
}
