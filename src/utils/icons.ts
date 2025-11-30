import { get } from "lodash";
import { FaPaperPlane } from "react-icons/fa";
import { GrInstagram, GrWhatsapp, GrYoutube } from "react-icons/gr";

const reactIcons = {
    instagram: GrInstagram,
    whatsapp: GrWhatsapp,
    youtube: GrYoutube,
    send: FaPaperPlane
}

export const getReactIcons = (name: string) => get(reactIcons, name);