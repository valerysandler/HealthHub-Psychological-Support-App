export class CountryModel {
    id: number | undefined;
    name!: string;
    code!: string;
    flag!: string;

    public constructor(country: CountryModel) {
        Object.assign(this, country);
    }
}
