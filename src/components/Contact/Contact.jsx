import css from "./Contact.module.css";

export default function Contact({ data, onDelete }) {
  return (
    <>
      <div>
        <h3>{data.name}</h3>
        <p>{data.number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(data.id)}>
        delete
      </button>
    </>
  );
}
