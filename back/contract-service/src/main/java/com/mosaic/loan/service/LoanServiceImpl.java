package com.mosaic.loan.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.mosaic.core.model.Loan;
import com.mosaic.core.util.InternalApiClient;
import com.mosaic.loan.dto.CreateLoanRequestDto;
import com.mosaic.loan.dto.CreditEvaluationResponseDto;
import com.mosaic.loan.dto.EvaluationStatus;
import com.mosaic.loan.event.message.LoanCreateTransactionPayload;
import com.mosaic.loan.event.producer.LoanKafkaProducer;
import com.mosaic.loan.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoanServiceImpl implements LoanService {

    private final LoanKafkaProducer loanKafkaProducer;
    private final LoanRepository loanRepository;
    private final InternalApiClient internalApiClient;
    //TODO 대출 실행하기
    //api : 신용평가 api
    //pub : 대출신청 발행


    //sub : 빌려줄 돈 모금 로직
    //approve : 모금이 가능한지 검증
    //execute: 데이터베이스에 해당 사항 반영
    //pub : 대출 모금 금액 계좌로 인출


    //TODO 빌린돈 인출하기
    //status: 대출 상태 실행으로 변경
    //sub : 인출 확인 트랜젝션
    //pub : 완료 ACK 발행


    @Override
    public void createLoan(CreateLoanRequestDto request) throws JsonProcessingException {
        //Todo 내부 신용평가 확인후 예외처리(없음, 시간지남 등등)
        CreditEvaluationResponseDto creditEvaluationResponseDto = internalApiClient.getMemberCreditEvaluation(request);
        if (!evaluateLoanRequest(creditEvaluationResponseDto)) return;
        Loan newLoan = Loan.requestOnlyFormLoan(request, creditEvaluationResponseDto);
        loanRepository.save(newLoan);
        loanKafkaProducer.sendLoanCreatedEvent(LoanCreateTransactionPayload.buildLoan(newLoan, creditEvaluationResponseDto));
    }

    private Boolean evaluateLoanRequest(CreditEvaluationResponseDto creditEvaluationResponseDto) {
        if (creditEvaluationResponseDto.getStatus().equals(EvaluationStatus.APPROVED)) return Boolean.TRUE;
        return Boolean.FALSE;
    }

    public void completeLoan() {
        //Todo loanConumser에서 완료 수신 후 loan증가
    }

    //TODO 돈 갚기(스케쥴러)
    //scheduele: 돈 갚는 계약
    //pub: 계좌기준으로 kafka 이벤트 발행
    //sub: 계좌에 돈 입금 확인
    //transaction: 이자 및 금액 분배

    //TODO 돈 갚기(조기상환)
}
