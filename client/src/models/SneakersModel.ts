class SneakersModel {
    public id!: string;
    public sku!: string;
    public brand!: string;
    public name!: string;
    public colorway!: string;
    public gender!: string;
    public silhouette!: string;
    public retailPrice!: number;
    public releaseDate!: string;
    public releaseYear!: number;
    public links!: {
        stockX: string;
        goat: string;
        flightClub: string;
    }
    public image!: {
        original: string;
        small: string;
        thumbnail: string;
        story: string;
    }


}

export default SneakersModel;