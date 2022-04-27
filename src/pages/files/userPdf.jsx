
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import { publicRequest } from "../../requestMetodos";



const userPdf = (dados, dadosLoja)=>{
  
    const data = new Date();
    const dataUs = data.toDateString()
  
   
 
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const reportTitle = [
    {
        text:`<VANDJALINE> LISTA DE COMPRAS loja: ${dadosLoja?.nome}`, 
        fontSize:15, 
        bold:true, 
        margin:[15, 20, 0, 45]
    },

   
];

const produtList = dados.produtos.map((pro)=>(
 
    [{},{text: `${pro.titulo} \n\n ${pro.descricao}`},{text:`${Number(pro.preco).toFixed(2)}Kz \n\n Quantidade ${pro?.quantidade} `}, {text:`${pro.loja !== undefined?pro.loja :"*"}`}]
   
))

const detalis = [
  
    {text: `Este comprovativo pertense a : ${dados.nomeUsuario}`, style: 'subheader'},
		`${dados.id_usuario}`,
		{
			style: 'tableExample',      
			color: '#444',
			table: {
				widths: ['auto','auto', '*', '*'],
				headerRows: 2,
				 //keepWithHeaderRows: 1,
				body: [
					[{text: `Lista de Compras de : ${dados.nomeUsuario}`, style: 'tableHeader', colSpan: 3, alignment: 'center'}, {}, {}, {}],
					[{text: 'VANDJALINE', style: 'tableHeader', alignment: 'center'},{text: 'Produto', style: 'tableHeader', alignment: 'center'}, {text: 'Preco/Uni', style: 'tableHeader', alignment: 'center'}, {text: 'Loja', style: 'tableHeader', alignment: 'center'}],
                    ['', '', '',''],
                    ...produtList,
                    ['', '', '',''],
					[`Fale com nosco : +244111111111\nEmail:uservandja@gmail.com\nLocal:Huila, Lubango\nData:${dataUs} `, {colSpan: 3, rowSpan: 2, text: `Resumo:\nSubtotal:Kz ${Number(dados.total).toFixed(2)}\nDesconto:%0\nTotal:Kz ${Number(dados.motante).toFixed(2)}`}, '',''],
					['Vandjaline', '', '',''],
                    
                ]
			}
		},
];

const rodape = (currentPage, pageCount)=>{
                 return[
                    {
                        text: currentPage+'/'+pageCount, 
                        alignment:"right",
                        fontSize:10, 
                    
                        margin:[0, 10, 20, 0]
                    }
                 ]
};

const docDefinicao = {
    pageSize:'A4',
    pageMargins:[15, 50, 15, 40],
    header:[reportTitle], 
    content:[detalis], 
  
    footer: rodape
}
 //pdfMake.createPdf(docDefinicao).open({}, window);

pdfMake.createPdf(docDefinicao).open({}, window);

    const dado = { url:dadosLoja.kamba, nome:dadosLoja?.nome,  email:dados.emailUsuario, produtos:dados.produtos , total:dados.motante, telefone:dadosLoja.telefone, emailLoja:dadosLoja.email};
    const enviarEmail = async ()=>{
try{
 await publicRequest.post("/autenticacao/email/pagamento", dado )
}catch{}
    }
    enviarEmail();

	



}


export default userPdf