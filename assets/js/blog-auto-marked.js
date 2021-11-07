let oldHref = document.location.href
function handleMarkDownTask() {
		const task = setInterval(() => {
			const bodyList = document.querySelector('#content')

			if (bodyList) {
			const attribution = document.querySelector('#attribution-container')
				if (attribution) {
					attribution.remove() //remove footer
				}
				clearInterval(task)
				observer = new MutationObserver(function(mutations) {
					mutations.forEach(function(mutation) {
						var mdEls = document.querySelectorAll('.markdown');
						for(var i in mdEls){
								var mdEl = mdEls[i];
								var converted = document.createElement('div');
					if(mdEl.value){
						converted.innerHTML = marked.parse(mdEl.value);
				converted.innerHTML = converted.innerHTML.replace(/<pre>/gi, "<pre style='background: #e8e4e4;padding: 8px 16px;border-radius: 4px;'>");
						console.log('</pre>', '</pre>');
									mdEl.parentNode.replaceChild(converted, mdEl);
					}
						}
						if (oldHref != document.location.href) {
							oldHref = document.location.href
							/* Changed ! your code here */
						}
					})
				})
				const config = {
					childList: true,
					subtree: true,
				}
				observer.observe(bodyList, config)
			}
		}, 100)
}

document.addEventListener('DOMContentLoaded', handleMarkDownTask)
