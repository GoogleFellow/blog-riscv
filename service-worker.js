/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d2e564e7f665e3432eb681fdd3ee0808"
  },
  {
    "url": "assets/css/0.styles.f7f6f39f.css",
    "revision": "bb8051f29569d707c129b33e23f072f9"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/2-1_selector.383bfbb0.jpeg",
    "revision": "383bfbb085c1eeb9b9473ae6f18e97a0"
  },
  {
    "url": "assets/img/8_bit_adder.68cd3891.jpeg",
    "revision": "68cd38910f526c149d232720b82b6ca1"
  },
  {
    "url": "assets/img/address_space_layout_randomization.dbda1bd1.jpeg",
    "revision": "dbda1bd1d43d6fa9d7b552ca57d223b9"
  },
  {
    "url": "assets/img/arp_protocol.6e6dab0f.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "assets/img/BCD_encoding.f5a0b0f2.jpg",
    "revision": "f5a0b0f2188ebe0d18f4424578a588b3"
  },
  {
    "url": "assets/img/branch_prediction.ea82f279.jpeg",
    "revision": "ea82f279b48c10ad95027c91ed62ab5d"
  },
  {
    "url": "assets/img/brash_motor.78e5d626.png",
    "revision": "78e5d626f0a9e18a5fd2434b712edb98"
  },
  {
    "url": "assets/img/brashless_motor.850d54bc.png",
    "revision": "850d54bc1f29f5bb3db7ee53d23803bd"
  },
  {
    "url": "assets/img/cache_coherence.a6146ddd.jpeg",
    "revision": "a6146ddd5c78f2cbc1af56b0ee3292da"
  },
  {
    "url": "assets/img/cache_system.0bb68b0b.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "assets/img/charset_encoding.9911c58d.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
  },
  {
    "url": "assets/img/cisc_risc.d69a1e75.jpeg",
    "revision": "d69a1e753fa1523df054573f13516277"
  },
  {
    "url": "assets/img/cpu_core_system.99c3127b.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "assets/img/CPU_pipeline_overhead.d9e141af.jpeg",
    "revision": "d9e141af3f2c5eedd5aed438388cfe26"
  },
  {
    "url": "assets/img/CPU_pipeline.1e880fa8.jpeg",
    "revision": "1e880fa8b1eab511583267e68f0541ad"
  },
  {
    "url": "assets/img/cpu_registers.cdba5c17.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "assets/img/D_flip_flop.d749acce.jpeg",
    "revision": "d749acce21756d89c35ee19545cfebbb"
  },
  {
    "url": "assets/img/decoder.4002b5f8.jpeg",
    "revision": "4002b5f8f60a913e655d5268348ee201"
  },
  {
    "url": "assets/img/direct_mapped_cache.522eade5.png",
    "revision": "522eade51bbfad19fd25eb4f3ce80f22"
  },
  {
    "url": "assets/img/dma_chain.5fca630d.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "assets/img/dma_engine.54d9bdb7.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
  },
  {
    "url": "assets/img/dynamic_link.8cab516a.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
  },
  {
    "url": "assets/img/elf_format.276a740d.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
  },
  {
    "url": "assets/img/esp32_address_table.85ad7d78.png",
    "revision": "85ad7d785bd61aa4cb118f0043b0e85b"
  },
  {
    "url": "assets/img/esp32_external_memory.00b7148f.png",
    "revision": "00b7148f698a82bf10935863900e4886"
  },
  {
    "url": "assets/img/esp32_on_chip_address_table.24c64bff.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
  },
  {
    "url": "assets/img/esp32_system_clock.212a5357.png",
    "revision": "212a53578bdae5d21866d16781a2a258"
  },
  {
    "url": "assets/img/esp32_system_structure.70e29ed6.png",
    "revision": "70e29ed6a527c6a0285db28bb7845464"
  },
  {
    "url": "assets/img/ethernet_frame.f4de10c4.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "assets/img/exception_class.da0117e6.jpeg",
    "revision": "da0117e669ebd2bd06c19beaf12d0da8"
  },
  {
    "url": "assets/img/exception.e8a49f09.jpeg",
    "revision": "e8a49f09d1bb50e4d42fccd14d743ad6"
  },
  {
    "url": "assets/img/float_example_result.9ace5a74.jpeg",
    "revision": "9ace5a7404d1790b03d07bd1b3cb5a27"
  },
  {
    "url": "assets/img/float_example.f9213c43.jpg",
    "revision": "f9213c43f5fa658a2192a68cd26435ae"
  },
  {
    "url": "assets/img/full_adder.3f11f278.jpg",
    "revision": "3f11f278ba8f24209a56fb3ee1ca9e2a"
  },
  {
    "url": "assets/img/gate_circuit.94194480.jpg",
    "revision": "94194480bcfd3b5366e4649ee80de4f6"
  },
  {
    "url": "assets/img/gdb_cheat_sheet.6f7e5433.png",
    "revision": "6f7e54334df820074939f6a5dbb99998"
  },
  {
    "url": "assets/img/gpio_matrix.0bccff5a.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "assets/img/half_adder.5860fd8c.jpg",
    "revision": "5860fd8c4ace079b40e66b9568d2b81e"
  },
  {
    "url": "assets/img/hyper_threading.96aa1220.jpeg",
    "revision": "96aa1220ff27776f55091c55c2eddbc8"
  },
  {
    "url": "assets/img/ieee_float32.914b71bf.jpg",
    "revision": "914b71bf1d85fb6ed76e1135f39b6941"
  },
  {
    "url": "assets/img/image_map.017b48c6.png",
    "revision": "017b48c6656dddd64aed21cad3813ae0"
  },
  {
    "url": "assets/img/infrared_modulation_demodulation.f86ad3e6.svg",
    "revision": "f86ad3e629424c9af8a216abb58ec189"
  },
  {
    "url": "assets/img/input_signal_to_peripheral.a9b187b8.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "assets/img/instruction_cycle.bde3548a.jpeg",
    "revision": "bde3548a4789ba49cab74c8c1ab02a67"
  },
  {
    "url": "assets/img/interrupt_matrix.dc37bcbd.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
  },
  {
    "url": "assets/img/io_mux_pad.671514cc.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "assets/img/ip_protocol.f8dade33.png",
    "revision": "f8dade3399a1b809f04f3921124d38cf"
  },
  {
    "url": "assets/img/iterator.a7ae1d2a.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "assets/img/knowledge_map.12bc9800.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
  },
  {
    "url": "assets/img/linear_regression.d67e8d49.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "assets/img/linker_process.f62da9b2.jpeg",
    "revision": "f62da9b29aa53218f8907851df27f912"
  },
  {
    "url": "assets/img/logistic_regression.4ef370cc.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "assets/img/lwip_api_message.6f551817.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "assets/img/lwip_arp_process_input.35e6fc48.png",
    "revision": "35e6fc48d57f6bdd06dcc3e9e7edead8"
  },
  {
    "url": "assets/img/lwip_arp_process_output.999a53be.png",
    "revision": "999a53be718cf8bb3857986a359d349b"
  },
  {
    "url": "assets/img/lwip_arp_reply.59985110.png",
    "revision": "59985110fc7d039a3cb5c11c152a145b"
  },
  {
    "url": "assets/img/lwip_arp_request.7e489783.png",
    "revision": "7e489783ce9afbf4379c3e2ff47718fe"
  },
  {
    "url": "assets/img/lwip_heap.1ac8ef3c.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "assets/img/lwip_icmp_protocol.a19c8c2e.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "assets/img/lwip_ip_frag.c71fe3b0.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "assets/img/lwip_ip_input.2eb1bb3b.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "assets/img/lwip_ip_output.a56af61e.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
  },
  {
    "url": "assets/img/lwip_memp.1fc0c568.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
  },
  {
    "url": "assets/img/lwip_packet_message.217126c7.png",
    "revision": "217126c725e129b967094255902f19ba"
  },
  {
    "url": "assets/img/lwip_packets_into_core.85a67ff6.png",
    "revision": "85a67ff6553a1d80caff17436465fa64"
  },
  {
    "url": "assets/img/lwip_pbuf_free_0.f2634715.png",
    "revision": "f263471547a20caf3e0b2ec438161dc0"
  },
  {
    "url": "assets/img/lwip_pbuf_free_1.33781abf.png",
    "revision": "33781abf43d12a922ea4eb1bb2f74828"
  },
  {
    "url": "assets/img/lwip_pbuf_pool.e9801004.png",
    "revision": "e98010044b87e4e7c0ff77af5605c319"
  },
  {
    "url": "assets/img/lwip_pbuf_ram.408a7517.png",
    "revision": "408a7517eeb27554819334a236e3806b"
  },
  {
    "url": "assets/img/lwip_pbuf_rom_ref.64893f56.png",
    "revision": "64893f569acab92710ec71b82dabf036"
  },
  {
    "url": "assets/img/lwip_timeouts_list.51042adb.png",
    "revision": "51042adb1c6c886cfc3878b0bc89594a"
  },
  {
    "url": "assets/img/memory_address_to_cache_line.1313fe1e.png",
    "revision": "1313fe1e4eb3b5c949284c8b215af8d4"
  },
  {
    "url": "assets/img/memory_hierarchy.ab345017.png",
    "revision": "ab345017c3f662b15e15e97e0ca1db0a"
  },
  {
    "url": "assets/img/memory_map.6e8f8541.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "assets/img/memory_paging.0cf2f08e.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "assets/img/memory_segmentation.57211af3.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
  },
  {
    "url": "assets/img/mesi.fa98835c.jpeg",
    "revision": "fa98835c78c879ab69fd1f29193e54d1"
  },
  {
    "url": "assets/img/mips_instruction.b1ade5f8.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "assets/img/motor_category.cd3b7f87.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
  },
  {
    "url": "assets/img/multi_level_page_table.61403411.jpeg",
    "revision": "614034116a840ef565feda078d73cb76"
  },
  {
    "url": "assets/img/multiply_example.0615e5e4.jpeg",
    "revision": "0615e5e4406617ee6584adbb929f9571"
  },
  {
    "url": "assets/img/netif_list.73bfcf79.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
  },
  {
    "url": "assets/img/nonlinear_regression.f58b96b1.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "assets/img/OoOE.153f8d5e.jpeg",
    "revision": "153f8d5e4a4363399133e1d7d9052804"
  },
  {
    "url": "assets/img/operant_forwarding.dceadd35.jpeg",
    "revision": "dceadd35c334974d8270052b37d48c27"
  },
  {
    "url": "assets/img/output_signal_to_pad.06e891ba.png",
    "revision": "06e891bab7649f99f5a1c070de7885c6"
  },
  {
    "url": "assets/img/PC_counter.1ed21092.jpg",
    "revision": "1ed21092022057ed192a7d9aff76144c"
  },
  {
    "url": "assets/img/peripheral_clock.329fd309.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "assets/img/pipeline_bubble.0d762f2c.jpeg",
    "revision": "0d762f2ce532d87cfe69c7b167af9c2a"
  },
  {
    "url": "assets/img/plt_got_table.1144d3a2.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
  },
  {
    "url": "assets/img/princeton_harvard.e7508cb4.jpeg",
    "revision": "e7508cb409d398380753b292b6df8391"
  },
  {
    "url": "assets/img/RS_flip_flop_with_clock.9e9bc411.jpeg",
    "revision": "9e9bc411aa8c7bf2f080f306a0fb8bd8"
  },
  {
    "url": "assets/img/RS_flip_flop.dc6dcce6.jpeg",
    "revision": "dc6dcce612b2fd51939d7ec44b3fe1de"
  },
  {
    "url": "assets/img/sbt_jvm_options.53a2af9f.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sequent_multiply.cb809de1.jpg",
    "revision": "cb809de19088d08767279715f07482e9"
  },
  {
    "url": "assets/img/setup_lwip.c67664dc.png",
    "revision": "c67664dc461af6d603ec1bc2e3f6a661"
  },
  {
    "url": "assets/img/sigmoid_function.24758bff.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "assets/img/simd.48ddcd5a.jpeg",
    "revision": "48ddcd5ac345091c1be5963d5ef7d7a6"
  },
  {
    "url": "assets/img/simple_page_table.22bb7912.jpeg",
    "revision": "22bb79129f6363ac26be47b35748500f"
  },
  {
    "url": "assets/img/simplest_CPU.6863e10f.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
  },
  {
    "url": "assets/img/spi_signals.2ac41670.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
  },
  {
    "url": "assets/img/sram.25c619a6.png",
    "revision": "25c619a683c161d3678c7339aa34d399"
  },
  {
    "url": "assets/img/ssd_lifecycle.966e51db.jpeg",
    "revision": "966e51db8354922b533e1db236337e81"
  },
  {
    "url": "assets/img/ssd_slc.0698c240.jpeg",
    "revision": "0698c240459faa11254932905675dba7"
  },
  {
    "url": "assets/img/ssd_structure.0eee4453.jpeg",
    "revision": "0eee44535a925825b657bcac6afb72d3"
  },
  {
    "url": "assets/img/strapping_pin.5c9a4fda.png",
    "revision": "5c9a4fda6540177c3f7f80d6862a22cc"
  },
  {
    "url": "assets/img/structure_hazard.c2a4c034.jpeg",
    "revision": "c2a4c0340cb835350ea954cdc520704e"
  },
  {
    "url": "assets/img/super_scalar.85f15ec6.jpeg",
    "revision": "85f15ec667d09fd2d368822904029b32"
  },
  {
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "assets/img/tlb.43205044.jpeg",
    "revision": "432050446f68569a37c7699cccda75d9"
  },
  {
    "url": "assets/img/two_add_instructions.94dda233.jpeg",
    "revision": "94dda2330b07c08530540ae11838c569"
  },
  {
    "url": "assets/img/Von_Neumann_architecture.76984515.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "assets/img/wear_leveling.6e78f8da.jpeg",
    "revision": "6e78f8da0320dc9b392b9d35ecf42091"
  },
  {
    "url": "assets/img/write_back.67053624.jpeg",
    "revision": "67053624d6aa2a5c27c295e1fda4890d"
  },
  {
    "url": "assets/img/write_through.8b9ad674.jpeg",
    "revision": "8b9ad674953bf36680e815247de235d3"
  },
  {
    "url": "assets/js/10.0ad4c247.js",
    "revision": "afbc5c7e72f8208199b6eeaf09243f01"
  },
  {
    "url": "assets/js/11.42d7ddb8.js",
    "revision": "952382cd96b3255757a50869e9bab200"
  },
  {
    "url": "assets/js/12.19dee7d0.js",
    "revision": "3d00981bc097946099eadebcb0223acb"
  },
  {
    "url": "assets/js/13.498da55a.js",
    "revision": "b6c48d48d3430991910739e36980918c"
  },
  {
    "url": "assets/js/14.ba20b5a3.js",
    "revision": "e7e2ac7730ba91ab364f4eab25d0cd5c"
  },
  {
    "url": "assets/js/15.67ad98ab.js",
    "revision": "6525d9167b0b2fcc872bc8e1aaec5b54"
  },
  {
    "url": "assets/js/16.fdea6c2c.js",
    "revision": "8fe047d934a92845da23b09de01ccae5"
  },
  {
    "url": "assets/js/17.c3f96519.js",
    "revision": "0923c3f8fe761bdfe7e3526d998761e0"
  },
  {
    "url": "assets/js/18.d8761851.js",
    "revision": "b88a8eaa5fdac54aeec7923e102a01e7"
  },
  {
    "url": "assets/js/19.643e5da3.js",
    "revision": "d65f404c5be7fe883335f400bb9eecfe"
  },
  {
    "url": "assets/js/2.90f26216.js",
    "revision": "420e92b4a7e4af81bbaeb25711a09555"
  },
  {
    "url": "assets/js/20.2edb5c6d.js",
    "revision": "f1e296d2c6835e2ff8dd54ea6c256254"
  },
  {
    "url": "assets/js/21.07ddf1c4.js",
    "revision": "53fa2d8dfc1424d4a82faf1d0786cc84"
  },
  {
    "url": "assets/js/22.5c409928.js",
    "revision": "60ab965c22227d03db41178be13e7ec6"
  },
  {
    "url": "assets/js/23.6587212f.js",
    "revision": "7cdb12ba434e5ec3c7c69f67dbe0ff52"
  },
  {
    "url": "assets/js/24.209496fa.js",
    "revision": "3ab4193680dc3f71417129f9894db2fd"
  },
  {
    "url": "assets/js/25.55b4b08e.js",
    "revision": "8196c0b25ea0c55fc0ccda24d9baba40"
  },
  {
    "url": "assets/js/26.9a40833f.js",
    "revision": "043496cd5ff3941b5f3bc5c914b3fba8"
  },
  {
    "url": "assets/js/27.2f2798fd.js",
    "revision": "e0a46d524389d481f9ebfcc23cd95e3b"
  },
  {
    "url": "assets/js/28.e677cdb3.js",
    "revision": "98caaf383fe8c092918ae59d28f237b1"
  },
  {
    "url": "assets/js/29.6e1e9d2f.js",
    "revision": "64ef101695b83ba85ef8764638b699e0"
  },
  {
    "url": "assets/js/3.6f988715.js",
    "revision": "1f97118a29c8535da9e9ea61b19d098c"
  },
  {
    "url": "assets/js/30.3db36a67.js",
    "revision": "e171989ab13ec32967d7c0c582443895"
  },
  {
    "url": "assets/js/31.5fe2e71c.js",
    "revision": "70f2dd14e17fbf23a930a7e505e2725b"
  },
  {
    "url": "assets/js/32.584ff625.js",
    "revision": "1974e299bc34463433599006e5deaf42"
  },
  {
    "url": "assets/js/33.491d4f1e.js",
    "revision": "98a95edbc922385e25e96e1ea1adcd94"
  },
  {
    "url": "assets/js/34.e251ee3c.js",
    "revision": "b6cc3f63164b2b79a345e7e445bf4601"
  },
  {
    "url": "assets/js/35.b3936916.js",
    "revision": "1c82a215823162730cb6109303f007cd"
  },
  {
    "url": "assets/js/36.f4dfca1a.js",
    "revision": "74ea2ef443765624f4425b6712972370"
  },
  {
    "url": "assets/js/37.33c1b3c2.js",
    "revision": "feaa0b15e40c1335be72046065456a21"
  },
  {
    "url": "assets/js/38.fc810265.js",
    "revision": "5fe132d966b4f9470c1787c387ba92bb"
  },
  {
    "url": "assets/js/39.727b62fd.js",
    "revision": "3a5cb30090c5e6b0f15e55a05e5a8180"
  },
  {
    "url": "assets/js/4.c13cc47e.js",
    "revision": "40837ae9236f20453450dab3fc46d564"
  },
  {
    "url": "assets/js/40.07f0343b.js",
    "revision": "b98401b6912147f049d27cbe1264c53f"
  },
  {
    "url": "assets/js/41.abc4aeeb.js",
    "revision": "207a2b164e47b160d8da9cd5c5383f97"
  },
  {
    "url": "assets/js/42.7e86e31d.js",
    "revision": "91c563c3e9be72e85f6626923339ee49"
  },
  {
    "url": "assets/js/43.228288ed.js",
    "revision": "38e27d99bde29063bc154d049ccdeb11"
  },
  {
    "url": "assets/js/44.a0aa595f.js",
    "revision": "e12e430e7ecd924d032367008624ce5b"
  },
  {
    "url": "assets/js/45.4335c247.js",
    "revision": "219d86bcf11dbf741459608db5b3c825"
  },
  {
    "url": "assets/js/46.c238c640.js",
    "revision": "38cb66dd8b6e1c9066ef0990ab2e519e"
  },
  {
    "url": "assets/js/47.3d4bb7bb.js",
    "revision": "31e76c554b0156947272f6f7a9eb4df3"
  },
  {
    "url": "assets/js/48.90f21e7d.js",
    "revision": "9bec25e1c14576abdf4cb5aaaa7eac48"
  },
  {
    "url": "assets/js/49.9a2bdc70.js",
    "revision": "3931804aa4bd4e64b21f0d7801fd2532"
  },
  {
    "url": "assets/js/5.ea9e0829.js",
    "revision": "6ef4dd134a57adaf6d534be4d6a8e46a"
  },
  {
    "url": "assets/js/50.7cd78dec.js",
    "revision": "958801a38428c35f946edbf3fb6f917f"
  },
  {
    "url": "assets/js/51.c1f7d308.js",
    "revision": "4a7cdae015bc4b20e409c067b4a8858c"
  },
  {
    "url": "assets/js/52.cf5c6593.js",
    "revision": "129b3b86cecd0eb5caffe00488b38943"
  },
  {
    "url": "assets/js/53.dd028176.js",
    "revision": "5fea90c11e8c8ccdffc9e44a1b9b4e98"
  },
  {
    "url": "assets/js/54.92e8507a.js",
    "revision": "d1612764d963ca77744a55c36d2c4d45"
  },
  {
    "url": "assets/js/55.efa50d9f.js",
    "revision": "4355285746dcef25063904ae1a19de36"
  },
  {
    "url": "assets/js/56.a0dffe8b.js",
    "revision": "a812cf2554e2259abc25dfa5916bacfe"
  },
  {
    "url": "assets/js/57.f5616638.js",
    "revision": "56b8f392b30813e15040b342319e0006"
  },
  {
    "url": "assets/js/58.0e6135af.js",
    "revision": "3accb354b7a8061ad9406e6ecc9a03b9"
  },
  {
    "url": "assets/js/59.811b6caa.js",
    "revision": "611368cfeec3d7f5dfb29fd290184c07"
  },
  {
    "url": "assets/js/6.d8cbd723.js",
    "revision": "599dcb4fc78dcf0418a38442ddc94287"
  },
  {
    "url": "assets/js/60.e8d9a93c.js",
    "revision": "cb604ce1cf04c6d951f636f6d09f6f94"
  },
  {
    "url": "assets/js/61.d06a7ff0.js",
    "revision": "cd82de5ae72e14a65c9766e364e62cd2"
  },
  {
    "url": "assets/js/62.77c14e3a.js",
    "revision": "665ad015400a364473379854018e31ea"
  },
  {
    "url": "assets/js/63.0a4b1c00.js",
    "revision": "86eb0b90b2d3822db47e3b04d856807c"
  },
  {
    "url": "assets/js/64.b713575c.js",
    "revision": "9a97d2be801cb0aa1b0ea6998a3e3df5"
  },
  {
    "url": "assets/js/65.cc6f8d87.js",
    "revision": "8e0aa38b3897c2d12cf8debdcce97d25"
  },
  {
    "url": "assets/js/66.b0ed9447.js",
    "revision": "2a142c087e2c1055cb32f683b799a3aa"
  },
  {
    "url": "assets/js/67.af7bc29f.js",
    "revision": "9af4b85cf012b50662c03100bfcc1b63"
  },
  {
    "url": "assets/js/68.d42d3a74.js",
    "revision": "034c752a4c03e8549668fb0ac57b4527"
  },
  {
    "url": "assets/js/69.ed38ca2e.js",
    "revision": "ead8593d7537543905228ff481877a4e"
  },
  {
    "url": "assets/js/7.8f7618df.js",
    "revision": "8193ac1ec3d437f72fef52ab33a7abf8"
  },
  {
    "url": "assets/js/70.2d6ed4fc.js",
    "revision": "f77bbd610a2283116454ad2e40cbd7c5"
  },
  {
    "url": "assets/js/71.0f541359.js",
    "revision": "d2e888e14a63bbe08c3dbcd0c6011f04"
  },
  {
    "url": "assets/js/72.696d5b20.js",
    "revision": "2708d5b16ac363dab66daccbfb5d515b"
  },
  {
    "url": "assets/js/73.c6585085.js",
    "revision": "8c3603cc012dfc6b110a66ac121f49c5"
  },
  {
    "url": "assets/js/74.9c17184b.js",
    "revision": "20534e1b170490b27047f38c15e53ea7"
  },
  {
    "url": "assets/js/75.7c505fa3.js",
    "revision": "95dd3889d5df94bb66994aa025be1778"
  },
  {
    "url": "assets/js/76.e9f5ab20.js",
    "revision": "02e07b0bd8bdf437386276a4b1ff2916"
  },
  {
    "url": "assets/js/77.9dd6c87c.js",
    "revision": "079ad355db1fae1292704bc41bd31171"
  },
  {
    "url": "assets/js/78.debf3907.js",
    "revision": "308364f05370d9e1892185a4413b5c95"
  },
  {
    "url": "assets/js/79.01956b27.js",
    "revision": "26aaeee4f51d50fab5c15ac82617fd24"
  },
  {
    "url": "assets/js/8.5d891c72.js",
    "revision": "29cbeeb67df442e5d060ee7f181d56c2"
  },
  {
    "url": "assets/js/80.b0404ee9.js",
    "revision": "ed7bec5711b1e905ef35ff50d209d3c2"
  },
  {
    "url": "assets/js/81.50ef070b.js",
    "revision": "eebee8e79c329650583fb8e6c3571a4a"
  },
  {
    "url": "assets/js/82.e10e26ab.js",
    "revision": "afbe1573f90a67cae9de29fa0021e2d7"
  },
  {
    "url": "assets/js/83.5b66a967.js",
    "revision": "1373fbeebb8b8a63ccc11b900d7a3aba"
  },
  {
    "url": "assets/js/84.0b4d7442.js",
    "revision": "6c81f3a502a279d680166fe4a4d1ca6d"
  },
  {
    "url": "assets/js/9.f82b7755.js",
    "revision": "65216ced4afa59b2132640d146ab796e"
  },
  {
    "url": "assets/js/app.820c4194.js",
    "revision": "7fef6512542b5d6f60ca1285111b8ed4"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "5aaf52d130337a7f90ad4f66dc33b717"
  },
  {
    "url": "cs/bash.html",
    "revision": "42fbd4ef9e8d8e253560163606261094"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "74a73a3108a8802c45a90e1857d4d770"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "cd173e811cc3356ecf8d471f7c090e94"
  },
  {
    "url": "cs/cmake.html",
    "revision": "630be43f62beb723c51e747f6c122ede"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "76300a2387affa0a163459d566f1491a"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "ec5c5c946af346f2ba5a38303322bf9c"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "5eae4934f21920f80b1c152b15d0f41a"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "69229e15cd17a86f15d4dee574daf4d1"
  },
  {
    "url": "cs/git.html",
    "revision": "10573a156451ab67f41a4a00690c3315"
  },
  {
    "url": "cs/index.html",
    "revision": "281003f7264cde88bcc5980cfc11888c"
  },
  {
    "url": "cs/iptables.html",
    "revision": "f44952837e733bdea77001d8b27134b7"
  },
  {
    "url": "cs/keras.html",
    "revision": "cfef96f0805aa71399ef6aa5d3dd35a4"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "e87a86cf6182551cfe3814f1c8925724"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a7420e1087369ab29c5441a64b4fe485"
  },
  {
    "url": "cs/lwip.html",
    "revision": "6ab7ebd64f45d85c879c9b04f25c42db"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "47cce90deebebd119aa714e4e32e53a3"
  },
  {
    "url": "cs/scala.html",
    "revision": "339c8a68b2aa2592f3fa364bc030197b"
  },
  {
    "url": "ee/about.html",
    "revision": "a0e482dfdef90b2bb840d18b26e86f40"
  },
  {
    "url": "ee/chisel.html",
    "revision": "058bc3345cabe35dd48a16c2f59c6371"
  },
  {
    "url": "ee/esp32.html",
    "revision": "d0dc5383a5ffbb9eb03d125b39c612a3"
  },
  {
    "url": "ee/index.html",
    "revision": "071da707636f4c57df04f0164bc2fe48"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "6f446b95be2193349c03dc9cb008074a"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "0dd16b7c69f4715b077ae4eef546967a"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "624fcb9d6fd4a2e443b4b9f2577a9be6"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "2d6b0991d38bc209c7e109773854a73c"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
  },
  {
    "url": "images/cs/ai/logistic_regression.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "images/cs/ai/sigmoid_function.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "images/cs/cheat_sheet/gdb_cheat_sheet.png",
    "revision": "6f7e54334df820074939f6a5dbb99998"
  },
  {
    "url": "images/cs/computer_composition/2-1_selector.jpeg",
    "revision": "383bfbb085c1eeb9b9473ae6f18e97a0"
  },
  {
    "url": "images/cs/computer_composition/8_bit_adder.jpeg",
    "revision": "68cd38910f526c149d232720b82b6ca1"
  },
  {
    "url": "images/cs/computer_composition/address_space_layout_randomization.jpeg",
    "revision": "dbda1bd1d43d6fa9d7b552ca57d223b9"
  },
  {
    "url": "images/cs/computer_composition/BCD_encoding.jpg",
    "revision": "f5a0b0f2188ebe0d18f4424578a588b3"
  },
  {
    "url": "images/cs/computer_composition/branch_prediction.jpeg",
    "revision": "ea82f279b48c10ad95027c91ed62ab5d"
  },
  {
    "url": "images/cs/computer_composition/cache_coherence.jpeg",
    "revision": "a6146ddd5c78f2cbc1af56b0ee3292da"
  },
  {
    "url": "images/cs/computer_composition/charset_encoding.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
  },
  {
    "url": "images/cs/computer_composition/cisc_risc.jpeg",
    "revision": "d69a1e753fa1523df054573f13516277"
  },
  {
    "url": "images/cs/computer_composition/CPU_pipeline_overhead.jpeg",
    "revision": "d9e141af3f2c5eedd5aed438388cfe26"
  },
  {
    "url": "images/cs/computer_composition/CPU_pipeline.jpeg",
    "revision": "1e880fa8b1eab511583267e68f0541ad"
  },
  {
    "url": "images/cs/computer_composition/cpu_registers.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "images/cs/computer_composition/D_flip_flop.jpeg",
    "revision": "d749acce21756d89c35ee19545cfebbb"
  },
  {
    "url": "images/cs/computer_composition/decoder.jpeg",
    "revision": "4002b5f8f60a913e655d5268348ee201"
  },
  {
    "url": "images/cs/computer_composition/direct_mapped_cache.png",
    "revision": "522eade51bbfad19fd25eb4f3ce80f22"
  },
  {
    "url": "images/cs/computer_composition/dynamic_link.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
  },
  {
    "url": "images/cs/computer_composition/elf_format.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
  },
  {
    "url": "images/cs/computer_composition/exception_class.jpeg",
    "revision": "da0117e669ebd2bd06c19beaf12d0da8"
  },
  {
    "url": "images/cs/computer_composition/exception.jpeg",
    "revision": "e8a49f09d1bb50e4d42fccd14d743ad6"
  },
  {
    "url": "images/cs/computer_composition/float_example_result.jpeg",
    "revision": "9ace5a7404d1790b03d07bd1b3cb5a27"
  },
  {
    "url": "images/cs/computer_composition/float_example.jpg",
    "revision": "f9213c43f5fa658a2192a68cd26435ae"
  },
  {
    "url": "images/cs/computer_composition/full_adder.jpg",
    "revision": "3f11f278ba8f24209a56fb3ee1ca9e2a"
  },
  {
    "url": "images/cs/computer_composition/gate_circuit.jpg",
    "revision": "94194480bcfd3b5366e4649ee80de4f6"
  },
  {
    "url": "images/cs/computer_composition/half_adder.jpg",
    "revision": "5860fd8c4ace079b40e66b9568d2b81e"
  },
  {
    "url": "images/cs/computer_composition/hyper_threading.jpeg",
    "revision": "96aa1220ff27776f55091c55c2eddbc8"
  },
  {
    "url": "images/cs/computer_composition/ieee_float32.jpg",
    "revision": "914b71bf1d85fb6ed76e1135f39b6941"
  },
  {
    "url": "images/cs/computer_composition/instruction_cycle.jpeg",
    "revision": "bde3548a4789ba49cab74c8c1ab02a67"
  },
  {
    "url": "images/cs/computer_composition/knowledge_map.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
  },
  {
    "url": "images/cs/computer_composition/linker_process.jpeg",
    "revision": "f62da9b29aa53218f8907851df27f912"
  },
  {
    "url": "images/cs/computer_composition/memory_address_to_cache_line.png",
    "revision": "1313fe1e4eb3b5c949284c8b215af8d4"
  },
  {
    "url": "images/cs/computer_composition/memory_hierarchy.png",
    "revision": "ab345017c3f662b15e15e97e0ca1db0a"
  },
  {
    "url": "images/cs/computer_composition/memory_paging.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "images/cs/computer_composition/memory_segmentation.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
  },
  {
    "url": "images/cs/computer_composition/mesi.jpeg",
    "revision": "fa98835c78c879ab69fd1f29193e54d1"
  },
  {
    "url": "images/cs/computer_composition/mips_instruction.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "images/cs/computer_composition/multi_level_page_table.jpeg",
    "revision": "614034116a840ef565feda078d73cb76"
  },
  {
    "url": "images/cs/computer_composition/multiply_example.jpeg",
    "revision": "0615e5e4406617ee6584adbb929f9571"
  },
  {
    "url": "images/cs/computer_composition/OoOE.jpeg",
    "revision": "153f8d5e4a4363399133e1d7d9052804"
  },
  {
    "url": "images/cs/computer_composition/operant_forwarding.jpeg",
    "revision": "dceadd35c334974d8270052b37d48c27"
  },
  {
    "url": "images/cs/computer_composition/PC_counter.jpg",
    "revision": "1ed21092022057ed192a7d9aff76144c"
  },
  {
    "url": "images/cs/computer_composition/pipeline_bubble.jpeg",
    "revision": "0d762f2ce532d87cfe69c7b167af9c2a"
  },
  {
    "url": "images/cs/computer_composition/plt_got_table.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
  },
  {
    "url": "images/cs/computer_composition/princeton_harvard.jpeg",
    "revision": "e7508cb409d398380753b292b6df8391"
  },
  {
    "url": "images/cs/computer_composition/RS_flip_flop_with_clock.jpeg",
    "revision": "9e9bc411aa8c7bf2f080f306a0fb8bd8"
  },
  {
    "url": "images/cs/computer_composition/RS_flip_flop.jpeg",
    "revision": "dc6dcce612b2fd51939d7ec44b3fe1de"
  },
  {
    "url": "images/cs/computer_composition/sequent_multiply.jpg",
    "revision": "cb809de19088d08767279715f07482e9"
  },
  {
    "url": "images/cs/computer_composition/simd.jpeg",
    "revision": "48ddcd5ac345091c1be5963d5ef7d7a6"
  },
  {
    "url": "images/cs/computer_composition/simple_page_table.jpeg",
    "revision": "22bb79129f6363ac26be47b35748500f"
  },
  {
    "url": "images/cs/computer_composition/simplest_CPU.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
  },
  {
    "url": "images/cs/computer_composition/sram.png",
    "revision": "25c619a683c161d3678c7339aa34d399"
  },
  {
    "url": "images/cs/computer_composition/ssd_lifecycle.jpeg",
    "revision": "966e51db8354922b533e1db236337e81"
  },
  {
    "url": "images/cs/computer_composition/ssd_slc.jpeg",
    "revision": "0698c240459faa11254932905675dba7"
  },
  {
    "url": "images/cs/computer_composition/ssd_structure.jpeg",
    "revision": "0eee44535a925825b657bcac6afb72d3"
  },
  {
    "url": "images/cs/computer_composition/structure_hazard.jpeg",
    "revision": "c2a4c0340cb835350ea954cdc520704e"
  },
  {
    "url": "images/cs/computer_composition/super_scalar.jpeg",
    "revision": "85f15ec667d09fd2d368822904029b32"
  },
  {
    "url": "images/cs/computer_composition/tlb.jpeg",
    "revision": "432050446f68569a37c7699cccda75d9"
  },
  {
    "url": "images/cs/computer_composition/two_add_instructions.jpeg",
    "revision": "94dda2330b07c08530540ae11838c569"
  },
  {
    "url": "images/cs/computer_composition/Von_Neumann_architecture.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "images/cs/computer_composition/wear_leveling.jpeg",
    "revision": "6e78f8da0320dc9b392b9d35ecf42091"
  },
  {
    "url": "images/cs/computer_composition/write_back.jpeg",
    "revision": "67053624d6aa2a5c27c295e1fda4890d"
  },
  {
    "url": "images/cs/computer_composition/write_through.jpeg",
    "revision": "8b9ad674953bf36680e815247de235d3"
  },
  {
    "url": "images/cs/cs.svg",
    "revision": "fe696bfe6c74377d4e9be63e9f170afc"
  },
  {
    "url": "images/cs/design_pattern/iterator.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "images/cs/keras/linear_regression.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "images/cs/keras/nonlinear_regression.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "images/cs/lwip/arp_protocol.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "images/cs/lwip/ethernet_frame.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "images/cs/lwip/ip_protocol.png",
    "revision": "f8dade3399a1b809f04f3921124d38cf"
  },
  {
    "url": "images/cs/lwip/lwip_api_message.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "images/cs/lwip/lwip_arp_process_input.png",
    "revision": "35e6fc48d57f6bdd06dcc3e9e7edead8"
  },
  {
    "url": "images/cs/lwip/lwip_arp_process_output.png",
    "revision": "999a53be718cf8bb3857986a359d349b"
  },
  {
    "url": "images/cs/lwip/lwip_arp_reply.png",
    "revision": "59985110fc7d039a3cb5c11c152a145b"
  },
  {
    "url": "images/cs/lwip/lwip_arp_request.png",
    "revision": "7e489783ce9afbf4379c3e2ff47718fe"
  },
  {
    "url": "images/cs/lwip/lwip_heap.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "images/cs/lwip/lwip_icmp_protocol.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "images/cs/lwip/lwip_ip_frag.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "images/cs/lwip/lwip_ip_input.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "images/cs/lwip/lwip_ip_output.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
  },
  {
    "url": "images/cs/lwip/lwip_memp.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
  },
  {
    "url": "images/cs/lwip/lwip_packet_message.png",
    "revision": "217126c725e129b967094255902f19ba"
  },
  {
    "url": "images/cs/lwip/lwip_packets_into_core.png",
    "revision": "85a67ff6553a1d80caff17436465fa64"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_free_0.png",
    "revision": "f263471547a20caf3e0b2ec438161dc0"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_free_1.png",
    "revision": "33781abf43d12a922ea4eb1bb2f74828"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_pool.png",
    "revision": "e98010044b87e4e7c0ff77af5605c319"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_ram.png",
    "revision": "408a7517eeb27554819334a236e3806b"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_rom_ref.png",
    "revision": "64893f569acab92710ec71b82dabf036"
  },
  {
    "url": "images/cs/lwip/lwip_timeouts_list.png",
    "revision": "51042adb1c6c886cfc3878b0bc89594a"
  },
  {
    "url": "images/cs/lwip/netif_list.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
  },
  {
    "url": "images/cs/lwip/setup_lwip.png",
    "revision": "c67664dc461af6d603ec1bc2e3f6a661"
  },
  {
    "url": "images/cs/lwip/tcp_ip_stack.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "images/cs/scala/sbt_jvm_options.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
  },
  {
    "url": "images/ee/ee.svg",
    "revision": "e0d4275736606674f67f12997b80a8b5"
  },
  {
    "url": "images/ee/esp32/cache_system.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "images/ee/esp32/cpu_core_system.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "images/ee/esp32/dma_chain.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "images/ee/esp32/dma_engine.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
  },
  {
    "url": "images/ee/esp32/esp32_address_table.png",
    "revision": "85ad7d785bd61aa4cb118f0043b0e85b"
  },
  {
    "url": "images/ee/esp32/esp32_external_memory.png",
    "revision": "00b7148f698a82bf10935863900e4886"
  },
  {
    "url": "images/ee/esp32/esp32_on_chip_address_table.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
  },
  {
    "url": "images/ee/esp32/esp32_system_clock.png",
    "revision": "212a53578bdae5d21866d16781a2a258"
  },
  {
    "url": "images/ee/esp32/esp32_system_structure.png",
    "revision": "70e29ed6a527c6a0285db28bb7845464"
  },
  {
    "url": "images/ee/esp32/gpio_matrix.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "images/ee/esp32/image_map.png",
    "revision": "017b48c6656dddd64aed21cad3813ae0"
  },
  {
    "url": "images/ee/esp32/input_signal_to_peripheral.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "images/ee/esp32/interrupt_matrix.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
  },
  {
    "url": "images/ee/esp32/io_mux_pad.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "images/ee/esp32/memory_map.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "images/ee/esp32/output_signal_to_pad.png",
    "revision": "06e891bab7649f99f5a1c070de7885c6"
  },
  {
    "url": "images/ee/esp32/peripheral_clock.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "images/ee/esp32/spi_signals.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
  },
  {
    "url": "images/ee/esp32/strapping_pin.png",
    "revision": "5c9a4fda6540177c3f7f80d6862a22cc"
  },
  {
    "url": "images/ee/infrared_remote/infrared_modulation_demodulation.svg",
    "revision": "f86ad3e629424c9af8a216abb58ec189"
  },
  {
    "url": "images/ee/infrared_remote/nec_ext_train.png",
    "revision": "2f78d1ce7f001926f6b90ad966796e91"
  },
  {
    "url": "images/ee/infrared_remote/nec_modulation.png",
    "revision": "da33571c6f0afb94b1ec1d91caba3edb"
  },
  {
    "url": "images/ee/infrared_remote/nec_repeat.png",
    "revision": "63364daf21e5522c64eb8dfa82f2cef2"
  },
  {
    "url": "images/ee/infrared_remote/nec_sequence.png",
    "revision": "afea92a3b5cc1aa2457d2b118b157c84"
  },
  {
    "url": "images/ee/infrared_remote/nec_train.png",
    "revision": "f970404e7bbfb5711fea5c776f689f3a"
  },
  {
    "url": "images/ee/motor/brash_motor.png",
    "revision": "78e5d626f0a9e18a5fd2434b712edb98"
  },
  {
    "url": "images/ee/motor/brashless_motor.png",
    "revision": "850d54bc1f29f5bb3db7ee53d23803bd"
  },
  {
    "url": "images/ee/motor/motor_category.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "7f3f777d138f012a2265d77b10d952f8"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "04dcbd879d05aca11b08e8ccac38a8b0"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "408ea52ae94a10257aec25a4e0d1aa36"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "78eb4441988533905ba97b4f6f379a76"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "3293a2ba7357e53a03a13a85cfc24cd8"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "a5ae50cb2baa927cbc564db72d233038"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "bbfaa6a7ce0ab3899cd13fae0516dabc"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0fa51e6798434754e980306de7b8c083"
  },
  {
    "url": "images/others/others.svg",
    "revision": "28a34ae59424a4becd8ace3f14b0b58c"
  },
  {
    "url": "images/resume/ai.svg",
    "revision": "f1dafe8922f7dca830e4ea40abe5a814"
  },
  {
    "url": "images/resume/blog.svg",
    "revision": "2132b282a62fdc63ec6084f47feeadca"
  },
  {
    "url": "images/resume/briefcase.svg",
    "revision": "e5b8dfd88d257ef59607ff503b46a890"
  },
  {
    "url": "images/resume/certificate.svg",
    "revision": "e855e283466a7596679860477005b95a"
  },
  {
    "url": "images/resume/electronic.svg",
    "revision": "bbc07af00a040961f7610db77ec955f8"
  },
  {
    "url": "images/resume/envelope.svg",
    "revision": "ce757b0ad4826316f62e2349dc69157d"
  },
  {
    "url": "images/resume/geek.svg",
    "revision": "46552f138017b1941df626e468d77937"
  },
  {
    "url": "images/resume/github.svg",
    "revision": "3fcc2347207e5f9c79a335745ad05d55"
  },
  {
    "url": "images/resume/graduation-cap.svg",
    "revision": "d011739b9d43665bd81607dfeb7290b2"
  },
  {
    "url": "images/resume/hobby.svg",
    "revision": "1958411e2d6842c6ed08302a14c944a1"
  },
  {
    "url": "images/resume/info.svg",
    "revision": "63bd9d622744545ad8854e469e32e497"
  },
  {
    "url": "images/resume/language.svg",
    "revision": "81bb4f03b3167297e7dfa9efc25e242b"
  },
  {
    "url": "images/resume/network.svg",
    "revision": "3769543541ba02f40a922818ea7f9425"
  },
  {
    "url": "images/resume/phone.svg",
    "revision": "5964fd19559cc192308ec5bbc7e24b5b"
  },
  {
    "url": "images/resume/programming.svg",
    "revision": "6ba074a9f3d4d8dad64511a293c7dccf"
  },
  {
    "url": "images/resume/project-diagram.svg",
    "revision": "2c022c0cc22ccdea32ea67668608877b"
  },
  {
    "url": "images/resume/tools.svg",
    "revision": "879de372ee37b73974b6cdb1847c29d8"
  },
  {
    "url": "images/resume/writing.svg",
    "revision": "bbf32bc943b50af3e456a375567a7f03"
  },
  {
    "url": "index.html",
    "revision": "354c16fc75e8adf8a0932d68668f1394"
  },
  {
    "url": "others/about.html",
    "revision": "1743064d8165e05cd7c6d7745ad1aba7"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "8a329c9226f07e4f659ccd425eba61ba"
  },
  {
    "url": "others/android-studio.html",
    "revision": "a5786b17e181c3407ab1ed3656e80c89"
  },
  {
    "url": "others/android.html",
    "revision": "eb959014edf2e237c214e0b062a5b7f5"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "340afedeaaadfd5ffc5fc7926882ddd1"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "28a626f17277be0f117dc42b18ed98a3"
  },
  {
    "url": "others/css.html",
    "revision": "bd58436b687bd84bc2a15bceb7ad5cb8"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "997799e571e3680542cf10e14c034f20"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "b08b9a5559760f3635321e2cabacb61e"
  },
  {
    "url": "others/english-writting.html",
    "revision": "845b67aba193966bb4dca3ac218c1dbd"
  },
  {
    "url": "others/freertos.html",
    "revision": "0f28702cb4ec790110b5872f7e05d6d2"
  },
  {
    "url": "others/gns3.html",
    "revision": "803c2844d0fb86f156fb34745505a45b"
  },
  {
    "url": "others/gps.html",
    "revision": "1a3767b6df0419dbc18d1594dbd48326"
  },
  {
    "url": "others/html5.html",
    "revision": "a6ff258f6ff0ee3b5d40206f3cbf0cf7"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "dfa45ffce7036e2b44216a5ad379c893"
  },
  {
    "url": "others/index.html",
    "revision": "4159c89680474e29f3aa4036c25b16c4"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "6367a81b4f79bd5dd86640cace6917d9"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "880ca36d576c044873ea4f46c93fa1fa"
  },
  {
    "url": "others/javascript.html",
    "revision": "3c5c73e1f96c5247677c739c5bcecf65"
  },
  {
    "url": "others/json.html",
    "revision": "3555569a52475a73578ea4990daee2da"
  },
  {
    "url": "others/latex.html",
    "revision": "545bd00c94a777e09cc5ce8f63c0836b"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "ccc4a070824c53ec001f09814ae4e802"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "018868c9d0680c0509cc25cc81a4be6c"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "320e8f734a58773eaa38dc309333157f"
  },
  {
    "url": "others/markdown.html",
    "revision": "110873473581d8791a8ba0ba20160c53"
  },
  {
    "url": "others/matlab.html",
    "revision": "fb98aef75eaebe4be7d6c871b799b084"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "ee0fc9cf978f7f1ed7aa7bdbe3ccc37d"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "d3d2524143cb4164da0a5ab52a0c908b"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "c9273fdf51a1bb7e38be0dd31049ed33"
  },
  {
    "url": "others/network-security.html",
    "revision": "350daeb7d9ce16fb5ba99d70d5ccf156"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "c374c5b18fa7b5790e94a0729a0115ec"
  },
  {
    "url": "others/oral_english.html",
    "revision": "b23dafa846df246812959c66a9e23a7f"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "74db1e263fcd403a1bb729f8b977e78b"
  },
  {
    "url": "others/poe.html",
    "revision": "9cffb13ab45add383b7eb1dad0c68b80"
  },
  {
    "url": "others/pyside2.html",
    "revision": "b75cea05e9aef5de7cecb0c85f1616bd"
  },
  {
    "url": "others/python-socket.html",
    "revision": "f570d9398ac017e441b6e608301b27ab"
  },
  {
    "url": "others/python.html",
    "revision": "cc40d39a2b1071dd3b87cbf1fecb3322"
  },
  {
    "url": "others/q-learning.html",
    "revision": "dec0dab357d872797f43a1b1f42a1050"
  },
  {
    "url": "others/qr-code.html",
    "revision": "7475a8c63fa690f44afcbe87ebed3e8e"
  },
  {
    "url": "others/qt4.html",
    "revision": "b099b79ff3da31c47caf41e69b94c6a8"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "da52faec9a0f345a88d338265271c43e"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "a870c1e6ad586edda19769755ba0620e"
  },
  {
    "url": "others/sd-card.html",
    "revision": "9e94b4135334dd447cfc03bcffd3bcb0"
  },
  {
    "url": "others/sdn.html",
    "revision": "f9f75e5aa622635df48d1ffdef4b72b0"
  },
  {
    "url": "others/star-uml.html",
    "revision": "ca28ce893502ea0af5d8f70801cd7068"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "f446f7fc483d9e8db234386e0ee43bb4"
  },
  {
    "url": "others/verilog.html",
    "revision": "fff4d9d3b8b57c440fb335d318dd1111"
  },
  {
    "url": "others/vue.html",
    "revision": "fe29d4a84818de97eb7ccf9f7267d55a"
  },
  {
    "url": "others/w5500.html",
    "revision": "1a3149067137e9ddf5ee8e35612a2307"
  },
  {
    "url": "others/w7500.html",
    "revision": "0340ddbb9437bcc8045d803d1ed91801"
  },
  {
    "url": "resume.html",
    "revision": "8cf1bbb0b293298de546333aa6dca31e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
