import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useId } from "react";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const searchFieldId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (value) => {
    dispatch(setStatusFilter(value));
  };

  return (
    <Formik
      initialValues={{ search: filter }}
      enableReinitialize
      onSubmit={(values) => {
        handleFilterChange(values.search);
      }}
    >
      {({ handleChange, values }) => (
        <Form className={css.formContainer}>
          <label htmlFor={searchFieldId} className={css.formLabel}>
            Find contact by Name
          </label>
          <Field
            type="input"
            name="search"
            id={searchFieldId}
            className={css.formField}
            value={filter}
            onChange={(e) => {
              handleChange(e);
              handleFilterChange(e.target.value);
            }}
          />
        </Form>
      )}
    </Formik>
  );
};
