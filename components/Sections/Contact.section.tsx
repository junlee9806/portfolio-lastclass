import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="flex flex-row justify-center my-8 gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/junlee9806" />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/junlee9806"
        />

        <Icon icon={<MdEmail />} url="mailto:kr.lj980603@gmail.com" />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/track/245onUPHGD1DYuiacxTuW0"
        />
      </div>
    </div>
  );
};

export default Contact;
