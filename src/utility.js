export const enableButton = (button) => {
  button.style.color = "#FFFFFF";
  button.style.backgroundColor = "#38A169";
  button.style.cursor = "pointer";
  button.style.pointerEvents = "all";
};

export const disableButton = (button) => {
  button.style.color = "#1A202C";
  button.style.backgroundColor = "#EDF2F7";
  button.style.cursor = "not-allowed";
  button.style.pointerEvents = "none";
};

export const extractTextFromHTML = (htmlContent) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  return tempDiv.textContent || tempDiv.innerText || '';
};
