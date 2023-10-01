import SneakersModel from '../models/SneakersModel';

interface SneakersCardProps {
  sneaker: SneakersModel;
}

export default function SneakersCard(props: SneakersCardProps): JSX.Element {
  return (
    <div key={props.sneaker.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={props.sneaker.brand}
          alt={props.sneaker.id}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={props.sneaker.links.flightClub}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.sneaker.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{props.sneaker.colorway}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{props.sneaker.retailPrice}</p>
      </div>
    </div>
  );
}
