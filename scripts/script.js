// Minimal hover swap: swap image to '-alt' filename on hover, revert on leave.
document.querySelectorAll('.img__werke img').forEach(img => {
	const src = img.getAttribute('src');
	if (!src) return;
	const dot = src.lastIndexOf('.');
	if (dot === -1) return;
	const altSrc = src.slice(0, dot) + '-alt' + src.slice(dot);
	img.dataset.orig = src;
	img.addEventListener('mouseenter', () => img.setAttribute('src', altSrc));
	img.addEventListener('mouseleave', () => img.setAttribute('src', img.dataset.orig));
});

document.querySelectorAll('.img__werke2 img').forEach(img => {
	const src = img.getAttribute('src');
	if (!src) return;
	const dot = src.lastIndexOf('.');
	if (dot === -1) return;
	const baseSrc = src.slice(0, dot).replace('-alt', '') + src.slice(dot);
	img.dataset.orig = src;
	img.addEventListener('mouseenter', () => img.setAttribute('src', baseSrc));
	img.addEventListener('mouseleave', () => img.setAttribute('src', img.dataset.orig));
});

const previewEL = document.querySelector('.werke-preview')

document.getElementById('gedanken').addEventListener('click', () =>{
    previewEL.classList.add('active')
    document.body.classList.add('product-view-active')
})

document.querySelector('.close-btn').addEventListener('click', () =>{
    previewEL.classList.remove('active')
    document.body.classList.remove('product-view-active')
})