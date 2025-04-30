let selectedDisk = null;

document.querySelectorAll('.peg').forEach(peg => {
  peg.addEventListener('click', () => {
    const topDisk = getTopDisk(peg);

    if (selectedDisk) {
      if (!topDisk || parseInt(selectedDisk.dataset.size) < parseInt(topDisk.dataset.size)) {
        peg.appendChild(selectedDisk);
        selectedDisk = null;

        if (document.querySelector('#peg3').children.length === 3) {
          setTimeout(() => alert('Congratulations! You solved it!'), 100);
        }
      }
    } else if (topDisk) {
      selectedDisk = topDisk;
    }
  });
});

function getTopDisk(peg) {
  const children = peg.querySelectorAll('.disk');
  return children[children.length - 1] || null;
}
