'use strict';
class JSCCommon {
	static modalCall() {
		const link = '[data-fancybox="modal"], .link-modal-js';
		Fancybox.defaults = {
			autoFocus: false,
			placeFocusBack: false,
		};
		Fancybox.bind('[data-fancybox]', {
			autoFocus: false,
			placeFocusBack: false,
			touch: false,
			trapFocus: false,
			placeFocusBack: false,
			infinite: false,
			// type: 'html',
			dragToClose: false,
			autoFocus: false,
			groupAll: false,
			groupAttr: false,
			showClass: "fancybox-throwOutUp",
			hideClass: "fancybox-throwOutDown",
			l10n: {
				CLOSE: "Закрыть",
				Escape: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад",
				MODAL: "Вы можете закрыть это модальное окно с помощью клавиши ESC.",
				ERROR: "Что-то пошло не так. Пожалуйста, повторите попытку позже",
				IMAGE_ERROR: "Изображение не найдено",
				ELEMENT_NOT_FOUND: "HTML-элемент не найден",
				AJAX_NOT_FOUND: "Ошибка при загрузке AJAX: не найдено",
				AJAX_FORBIDDEN: "Ошибка при загрузке AJAX: запрещено",
				IFRAME_ERROR: "Ошибка загрузки iframe",
			},
			on: {
				done: (fancybox) => {
					this.setCustomScrollbar();
				},
			},
		});
		Fancybox.bind(link, {
			arrows: false,
			// // infobar: false,
		});
		document.querySelectorAll(".modal-close-js").forEach(el => {
			el.addEventListener("click", () => {
				Fancybox.close();
			})
		})
		 
	}
	// / 

	static inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		Inputmask({ "mask": "+7 (999) 999–99–99", showMaskOnHover: false }).mask(InputTel);
	}
	static setCustomScrollbar() {
		$(".custom-scroll").mCustomScrollbar({
			theme: 'minimal-dark',
			alwaysShowScrollbar: true
		});
	} 
	static init() {
		this.modalCall(); 
		this.inputMask();
		this.setCustomScrollbar();
	}
};