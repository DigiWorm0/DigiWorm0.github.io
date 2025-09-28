import HomeLab from "../types/HomeLab.ts";

const HomeLabDB: HomeLab[] = [
    {
        title: "MK I - PortaSDR",
        description: `This is a portable software-defined radio (SDR) setup with a Raspberry Pi 3, touchscreen, and an SDR dongle, all powered by a portable battery pack for portable radio ops.`,
        imageURL: "mk1_thumb.png"
    },
    {
        title: "MK II - Primary",
        description: `This is a full-sized 19" rack housing a few repurposed Dell Optiplex servers running Proxmox with various VMs/Docker containers for home automation, media serving, and development.`,
        imageURL: "mk2_thumb.png"
    },
    {
        title: "MK III - Secondary",
        description: `This is a custom 10" rack case built with 30/30 aluminum extrusions with a mini-ITX board running Proxmox with various VMs/Docker containers for edge computing and local network services.`,
        imageURL: "mk3_thumb.png"
    }
];
export default HomeLabDB;