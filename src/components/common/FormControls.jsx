export const createComponent =
  (Wrapper = 'div', Child = 'input') =>
  ({ input, meta, ...props }) => {
    return (
      <Wrapper>
        <Child {...input} {...props} />
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </Wrapper>
    )
  }
