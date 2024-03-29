import styled from 'styled-components';

export default function ButtonDelete({ onClick }) {
  return (
    <DeleteButton type="button" aria-label="delete this card" onClick={onClick}>
      <svg
        width="28"
        height="30"
        viewBox="0 0 30 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {' '}
        <title>Delete Plant</title>
        <path
          d="M9.0625 3.1875H8.75C8.92188 3.1875 9.0625 3.04688 9.0625 2.875V3.1875H20.9375V2.875C20.9375 3.04688 21.0781 3.1875 21.25 3.1875H20.9375V6H23.75V2.875C23.75 1.49609 22.6289 0.375 21.25 0.375H8.75C7.37109 0.375 6.25 1.49609 6.25 2.875V6H9.0625V3.1875ZM28.75 6H1.25C0.558594 6 0 6.55859 0 7.25V8.5C0 8.67188 0.140625 8.8125 0.3125 8.8125H2.67187L3.63672 29.2422C3.69922 30.5742 4.80078 31.625 6.13281 31.625H23.8672C25.2031 31.625 26.3008 30.5781 26.3633 29.2422L27.3281 8.8125H29.6875C29.8594 8.8125 30 8.67188 30 8.5V7.25C30 6.55859 29.4414 6 28.75 6ZM23.5664 28.8125H6.43359L5.48828 8.8125H24.5117L23.5664 28.8125Z"
          fill="#4ECB71"
        />
      </svg>
    </DeleteButton>
  );
}

const DeleteButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  align-self: flex-end;
  justify-content: right;
  margin: 0.5rem 0rem 0.1rem 0.2rem;
`;
