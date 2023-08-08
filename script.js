function changeHandler(event) {
    const xValue = document.getElementById('anim-x').value;
    const yValue = document.getElementById('anim-y').value;
    const scaleValue = document.getElementById('anim-scale').value;
    const rotationValue = document.getElementById('anim-rotation').value;
    const durationValue = document.getElementById('anim-duration').value;
  
    const animationBox = document.getElementById('animation-box');
    animationBox.style.transform = `
      translate(${xValue}%, ${yValue}%)
      scale(${scaleValue})
      rotate(${rotationValue}deg)
    `;
    animationBox.style.transitionDuration = `${durationValue}s`;
  
    updateLabels(xValue, yValue, scaleValue, rotationValue, durationValue);
  }
  
  function updateLabels(x, y, scale, rotation, duration) {
    document.getElementById('anim-x-label').textContent = `X: ${x}%`;
    document.getElementById('anim-y-label').textContent = `Y: ${y}%`;
    document.getElementById('anim-scale-label').textContent = `Scale: ${scale}`;
    document.getElementById('anim-rotation-label').textContent = `Rotation: ${rotation}deg`;
    document.getElementById('anim-duration-label').textContent = `Duration: ${duration}s`;
  }
  