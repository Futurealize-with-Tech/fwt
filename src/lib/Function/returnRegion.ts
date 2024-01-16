import { RegionType } from "@/types/regionType";
import { regions } from "../data/Region/regions"

export const returnRegion = (kind: string) => {
    const region = regions.find((region) => region.name === kind);

    if (region) {
        return region;
    } else {
        const nonRegion: RegionType = {name: '?', nameText: '?', color: 'var(--primary-gray)'};
        return nonRegion;
    };
}
