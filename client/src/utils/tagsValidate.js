export default function validate(tags, input) {
  let errors = {};
  if (!tags.length && input) {
    if (
      !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
        input
      )
    )
      errors.url = "URL invalid.";
  }
  if (
    tags.filter(
      (url) =>
        !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
          url
        ) === true
    ).length
  ) {
    errors.url = "URL invalid.";
  }

  return errors;
}
