import "./Clients.css";

const CLIENTS = [
  {
    name: "VERVE",
    image:
      "https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?auto=format&fit=crop&w=500&h=250&q=80",
  },
  {
    name: "ORBIT",
    image:
      "https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=500&h=250&q=80",
  },
  {
    name: "NOVA",
    image:
      "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=500&h=250&q=80",
  },
  {
    name: "DISTRICT",
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=500&h=250&q=80",
  },
  {
    name: "PULSE",
    image:
      "https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=500&h=250&q=80",
  },
  {
    name: "ATLAS",
    image:
      "https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=500&h=250&q=80",
  },
  {
    name: "FORGE",
    image:
      "https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?auto=format&fit=crop&w=500&h=250&q=80",
  },
  {
    name: "HALO",
    image:
      "https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=500&h=250&q=80",
  },
  {
    name: "CIRCUIT",
    image:
      "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=500&h=250&q=80",
  },
  {
    name: "GRID",
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=500&h=250&q=80",
  },
];

function Clients() {
  return (
    <section className="clients-section" id="clients">
      <div className="clients-wrap">

        <div className="clients-heading">
          <h2>
            CLIENTS WE'VE WORKED
            <br />
            WITH
          </h2>
        </div>

        <div className="client-wall">
          {CLIENTS.map((client) => (
            <div
              className="client-cell tilt"
              key={client.name}
            >
              <span className="client-name">
                {client.name}
              </span>

              <img
                src={client.image}
                alt=""
                className="client-image"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;